export async function load({ parent }) {
	const { storyblokApi } = await parent();

	const { data, headers: headersData } = await storyblokApi.get('cdn/stories', {
		version: 'draft',
		starts_with: 'blog/',
		is_startpage: 0,
		excluding_fields: 'content',
		sort_by: 'content.dateCreated:desc',
	});

	const headers = new Headers(headersData);
	const totalPageCount = +(headers.get('total') || '1');
	return {
		stories: data.stories,
		totalPageCount: totalPageCount,
		seo: {
			title: 'test',
			description: 'test'
		},
	};
}
