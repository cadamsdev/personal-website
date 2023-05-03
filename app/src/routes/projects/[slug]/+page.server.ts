import { getSanityClient } from '../../../utils/sanity-utils';
import md from 'markdown-it';
import mila from 'markdown-it-link-attributes';
import { PAGE_TITLE } from '../../../utils/settings';

const markdown = md();

markdown.use(mila, {
	attrs: {
		target: '_blank',
		rel: 'noopener'
	}
});

export async function load({ params }) {
	const client = getSanityClient();
	const project = await client.fetch(
		`*[_type == "project" && slug.current == "${params.slug}"]{title, previewImage, tags, description, content, _id}[0]`
	);

	if (!project) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

	const markdownContent = markdown.render(project.content);

	return {
		project: {
			...project,
			content: markdownContent
		},
		seo: {
			title: `${PAGE_TITLE} - ${project.title}`,
		},
	};
}
