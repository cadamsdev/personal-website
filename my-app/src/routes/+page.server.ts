import { getSanityClient } from '../utils/sanity-utils';

export async function load() {
	const client = getSanityClient();
	const pageData = await client.fetch(`*[_type == "page" && slug == "/"][0]`);

	if (!pageData) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	const hero = pageData.pageBuilder.find((item: any) => item._type === 'hero');

	return {
		...pageData,
		hero,
	};
}
