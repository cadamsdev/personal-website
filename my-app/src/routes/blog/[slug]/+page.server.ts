import { getSanityClient } from '../../../utils/sanity-utils';
import md from 'markdown-it';
import mila from 'markdown-it-link-attributes';

const markdown = md();

markdown.use(mila, {
	attrs: {
		target: '_blank',
		rel: 'noopener'
	}
});

export async function load( { params }) {
	const client = getSanityClient();
	const blog = await client.fetch(
		`*[_type == "blog" && slug.current == "${params.slug}"]{_id, _updatedAt, dateCreated, description, title, dateCreated, excerpt, "timeToRead": round(length(content) / 5 / 180), tags, content}[0]`
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
	};
}
