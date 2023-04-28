import { getSanityClient } from '../../utils/sanity-utils';

export async function load({ url }) {
	const currentPage = url.searchParams.get('page') || '1';

	const client = getSanityClient();
	const projectData = await client.fetch(
		`{"items": *[_type == "project"]{title, order, slug, previewImage, tags, description, _id} | order(order desc) [${+currentPage * 5 - 5}...${+currentPage * 5}], "totalItemCount": count(*[_type == "project"])}`
	);

	if (!projectData) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	return {
		projects: projectData.items,
		currentPage: currentPage,
		totalPageCount: Math.ceil(projectData.totalItemCount / 5)
	};
}
