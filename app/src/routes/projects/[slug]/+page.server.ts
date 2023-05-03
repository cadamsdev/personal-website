import { getSanityClient } from '../../../utils/sanity-utils';
import md from 'markdown-it';
import mila from 'markdown-it-link-attributes';
import hljs from 'highlight.js';
import mdUtils from 'markdown-it/lib/common/utils';
import { PAGE_TITLE } from '../../../utils/settings';

const markdown = md({
	breaks: true,
	linkify: true,
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return (
					'<pre class="hljs"><code>' +
					hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
					'</code></pre>'
				);
			} catch (__) {
				/* empty */
			}
		}

		return '<pre class="hljs"><code>' + mdUtils.escapeHtml(str) + '</code></pre>';
	}
});

markdown.use(mila, {
	attrs: {
		target: '_blank',
		rel: 'noopener'
	}
});

export async function load({ params }) {
	const client = getSanityClient();
	const project = await client.fetch(
		`*[_type == "project" && slug.current == "${params.slug}"]{title, previewImage, tags, seo, description, content, _id}[0]`
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
			description: project?.seo?.description,
		},
	};
}
