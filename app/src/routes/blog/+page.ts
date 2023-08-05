export async function load({ parent, url }) {
	const { storyblokApi } = await parent();
	const page = +(url.searchParams.get('page') || '1');
	const maxStoriesPerPage = 10;
	const { data, headers: headersData } = await storyblokApi.get('cdn/stories', {
		version: 'draft',
		starts_with: 'blog/',
		is_startpage: 0,
		excluding_fields: 'content',
		sort_by: 'content.dateCreated:desc',
		page,
		per_page: maxStoriesPerPage
	});

	const headers = new Headers(headersData);
	const totalStories = +(headers.get('total') || '1');
	return {
		stories: data.stories,
		totalPageCount: Math.ceil(totalStories / maxStoriesPerPage),
		currentPage: page,
		seo: {
			title: 'test',
			description: 'test'
		}
	};
}
