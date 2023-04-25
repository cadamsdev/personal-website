import { getSanityClient } from "../../utils/sanity-utils";

export async function load() {
	const client = getSanityClient();
	const blogs = await client.fetch(
		`*[_type == "blog"]{_id, _updatedAt, dateCreated, description, title, slug, dateCreated, excerpt, "timeToRead": round(length(content) / 5 / 180), tags} | order(dateCreated desc)`
	);

	if (!blogs) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	return {
		blogs,
	};
}
