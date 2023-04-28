import { getSanityClient } from "../../utils/sanity-utils";

export async function load({ url }) {
	const currentPage = url.searchParams.get('page') || '1';
	const client = getSanityClient();
	const blogData = await client.fetch(
		`{"items": *[_type == "blog"]{_id, _updatedAt, dateCreated, description, title, slug, dateCreated, excerpt, "timeToRead": round(length(content) / 5 / 180), tags} | order(dateCreated desc) [${+currentPage * 5 - 5}...${+currentPage * 5}], "totalItemCount": count(*[_type == "blog"])}`
	);

	if (!blogData) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	return {
		blogs: blogData.items,
		currentPage: currentPage,
		totalPageCount: Math.ceil(blogData.totalItemCount / 5),
	};
}
