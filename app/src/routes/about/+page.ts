export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const dataStory = await storyblokApi.get('cdn/stories/about', {
		version: 'draft'
	});

	return {
		story: dataStory.data.story,
		seo: {
			title: 'test',
			description: 'test'
		}
	};
}
