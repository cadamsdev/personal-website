export async function load({ parent, url }) {
	const { storyblokApi } = await parent();
	const currentPage = +(url.searchParams.get('page') || '1');
	const maxStoriesPerPage = 5;

	const [{ data, headers: headersData }, { data: pageData } ] = await Promise.all([
		storyblokApi.get('cdn/stories', {
			version: 'draft',
			starts_with: 'projects/',
			is_startpage: 0,
			excluding_fields: 'content',
			page: currentPage,
			per_page: maxStoriesPerPage
		}),
		storyblokApi.get('cdn/stories/projects', {
			version: 'draft'
		}),
	]);

	const headers = new Headers(headersData);
	const totalPageCount = +(headers.get('total') || '1');
	return {
		stories: data.stories,
		totalPageCount: Math.ceil(totalPageCount / maxStoriesPerPage),
		currentPage,
		seo: {
			title: pageData.story?.content?.seo?.title || 'Projects',
			description: pageData.story?.content?.seo?.description || ''
		}
	};
}
