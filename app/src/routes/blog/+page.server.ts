import { getSanityClient } from "../../utils/sanity-utils";
import { PAGE_TITLE } from "../../utils/settings";

export async function load({ url }) {
	const currentPage = url.searchParams.get('page') || '1';
	const client = getSanityClient();

	const pageDataPromise = client.fetch(`*[_type == "page" && slug == "/blog"][0]`);
	const blogDataPromise = client.fetch(
		`{"items": *[_type == "blog"]{_id, _updatedAt, dateCreated, description, title, slug, dateCreated, excerpt, "timeToRead": math::max([1, round(length(content) / 5 / 250)]), tags} | order(dateCreated desc) [${
			+currentPage * 5 - 5
		}...${+currentPage * 5}], "totalItemCount": count(*[_type == "blog"])}`
	);

	const [pageData, blogData] = await Promise.all([pageDataPromise, blogDataPromise]);

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
		seo: {
			title: `${PAGE_TITLE} - Blog`,
			description: pageData?.seo?.description,
		}
	};
}
