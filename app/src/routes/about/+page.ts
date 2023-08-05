export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const { data } = await storyblokApi.get('cdn/stories/about', {
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
