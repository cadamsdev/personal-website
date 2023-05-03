import { getSanityClient } from '../../../utils/sanity-utils';
import md from 'markdown-it';
import mdUtils from 'markdown-it/lib/common/utils';
import mila from 'markdown-it-link-attributes';
import hljs from 'highlight.js';
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
			} catch (__) { /* empty */ }
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

export async function load( { params }) {
	const client = getSanityClient();
	const blog = await client.fetch(
		`*[_type == "blog" && slug.current == "${params.slug}"]{_id, _updatedAt, dateCreated, description, seo, title, dateCreated, excerpt, "timeToRead": round(length(content) / 5 / 180), tags, content}[0]`
	);

	if (!blog) {
		return {
			status: 500,
			body: new Error('Internal Server Error')
		};
	}

  const markdownContent = markdown.render(blog.content);

	return {
		blog: {
      ...blog,
      content: markdownContent,
    },
		seo: {
			title: `${PAGE_TITLE} - ${blog.title}`,
			description: blog?.seo?.description,
		},
	};
}
