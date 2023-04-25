import { getSanityClient } from '../../utils/sanity-utils';

export async function load() {
	const client = getSanityClient();
	const projects = await client.fetch(
		`*[_type == "project"]{title, order, slug, previewImage, tags, description, _id} | order(order desc)`
	);

	if (!projects) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	return {
		projects,
	};
}
