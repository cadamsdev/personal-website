export async function load({ parent, url }) {
	const { storyblokApi } = await parent();
	const currentPage = +(url.searchParams.get('page') || '1');
	const maxStoriesPerPage = 5;
	const { data, headers: headersData } = await storyblokApi.get('cdn/stories', {
		version: 'draft',
		starts_with: 'projects/',
		is_startpage: 0,
		excluding_fields: 'content',
		page: currentPage,
		per_page: maxStoriesPerPage
	});

	const headers = new Headers(headersData);
	const totalPageCount = +(headers.get('total') || '1');
	return {
		stories: data.stories,
		totalPageCount: Math.ceil(totalPageCount / maxStoriesPerPage),
		currentPage,
		seo: {
			title: data.story?.content?.seo?.title || '',
			description: data.story?.content?.seo?.description || '',
		}
	};
}
