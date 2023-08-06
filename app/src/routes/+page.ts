export async function load({ parent }) {
	const { storyblokApi } = await parent();
	const { data } = await storyblokApi.get('cdn/stories/home', {
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
