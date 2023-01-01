import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import ago from 's-ago';
import md from 'markdown-it';
import hljs from 'highlight.js';
import mdUtils from 'markdown-it/lib/common/utils';
import mila from 'markdown-it-link-attributes';

const blogDir = join(process.cwd(), 'content', 'blog');
const projectDir = join(process.cwd(), 'content', 'projects');
const contentDir = join(process.cwd(), 'content');

export function getAbout() {
  const path = join(contentDir, 'about.md');
  const fileContents = fs.readFileSync(path, 'utf8');
  const { content } = matter(fileContents);
  return content;
}

export function getProjectSlugs() {
  return fs.readdirSync(projectDir);
}

export function getProjectBySlug(slug: string, fields: string[] = []): Partial<Project> {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const parser = md({
    breaks: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            '</code></pre>'
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + mdUtils.escapeHtml(str) + '</code></pre>'
      );
    },
  }).use(mila, {
    attrs: {
      target: "_blank",
      rel: "noopener",
    }
  });

  const items: any = {};

  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        items[field] = realSlug;
        break;

      case 'content':
        const html = parser.render(content);
        items[field] = html;
        break;

      default:
        items[field] = data[field];
        break;
    }
  });

  return items;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  previewImage: string;
  sort: number;
  content: string;
  slug: string;
}

export function getAllProjects(fields: string[] = []): Partial<Project>[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((project1, project2) => {
      const aSort = project1.sort || 0;
      const bSort = project2.sort || 0;

      if (aSort && bSort) {
        return aSort > bSort ? -1 : 0;
      }

      return 0;
    });
  return projects;
}

export function getBlogSlugs() {
  return fs.readdirSync(blogDir);
}

export function getBlogBySlug(slug: string, fields: string[] = []): Partial<Blog> {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(blogDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { text: timeToRead } = readingTime(fileContents);

  const parser = md({
    breaks: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: true })
              .value +
            '</code></pre>'
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' + mdUtils.escapeHtml(str) + '</code></pre>'
      );
    },
  }).use(mila, {
    attrs: {
      target: '_blank',
      rel: 'noopener',
    },
  });

  const blog: any = {};

  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        blog[field] = realSlug;
        break;

      case 'content':
        const html = parser.render(content);
        blog[field] = html;
        break;

      case 'timeToRead':
        blog[field] = timeToRead;
        break;

      case 'ago':
        blog[field] = ago(new Date(Date.parse(data.date)));
        break;

      case 'date':
        blog[field] = new Date(data.date).toISOString();
        break;

      default:
        blog[field] = data[field];
        break;
    }
  });

  return blog;
}

export interface Blog {
  slug: string;
  content: string;
  timeToRead: number;
  ago: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
}

export function getAllBlogs(fields: string[] = []): Partial<Blog>[] {
  const slugs = getBlogSlugs();
  const blogs = slugs
    .map((slug) => getBlogBySlug(slug, fields))
    .sort((post1, post2) => {
      if (post1.date && post2.date) {
        return post1.date > post2.date ? -1 : 1;
      }

      return 0;
    });
  return blogs;
}
