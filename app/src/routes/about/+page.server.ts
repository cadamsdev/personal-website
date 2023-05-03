import { getSanityClient } from "../../utils/sanity-utils";
import md from 'markdown-it';
import mila from 'markdown-it-link-attributes';
import { PAGE_TITLE } from "../../utils/settings";

const markdown = md();

markdown.use(mila, {
	attrs: {
		target: '_blank',
		rel: 'noopener'
	}
});

export async function load() {
	const client = getSanityClient();
	const pageData = await client.fetch(`*[_type == "page" && slug == "/about"][0]`);

	if (!pageData) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	const about = pageData.pageBuilder.find((item: any) => item._type === 'about');
	const markdownContent = markdown.render(about.content);

	return {
		...pageData,
		about: {
			...about,
			content: markdownContent
		},
		seo: {
			title: `${PAGE_TITLE} - About`,
			description: pageData.seo.description,
		}
	};
}
