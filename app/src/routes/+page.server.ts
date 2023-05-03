import { getSanityClient } from '../utils/sanity-utils';
import { PAGE_TITLE } from '../utils/settings';

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
		seo: {
			title: `${PAGE_TITLE} - Home`,
			description: pageData.seo.description,
		}
	};
}
