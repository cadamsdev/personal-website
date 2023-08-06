export async function load({ parent, params }) {
	const { storyblokApi } = await parent();
	const slug = params.slug;
	const { data } = await storyblokApi.get(`cdn/stories/projects/${slug}`, {
		version: 'draft'
	});
	return {
		story: data.story,
		seo: {
			title: data.story?.content?.seo?.title || '',
			description: data.story?.content?.seo?.description || '',
		}
	};
}
