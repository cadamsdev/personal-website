export async function load({ parent, params }) {
	const { storyblokApi } = await parent();
	const slug = params.slug;
	const { data } = await storyblokApi.get(`cdn/stories/projects/${slug}`, {
		version: 'draft'
	});
	return {
		story: data.story,
		seo: {
			title: 'test',
			description: 'test'
		}
	};
}
