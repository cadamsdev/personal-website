import React from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import Tag from '../components/Tag';
import Layout from '../components/layouts/MainLayout';
import { getAllBlogs, getProjectBySlug } from '../../lib/api';
import { Project } from '../interfaces/project';

interface FeaturedProjectProps {
  project: Partial<Project>;
}

function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <div className="inline-block">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 underline text-center">
        Featured Project
      </h1>
      <img
        className="mb-2"
        src={project.previewImage}
        alt="preview"
        style={{
          maxHeight: '256px',
        }}
      />
      <Link href={`/projects/${project.slug}`}>
        <DecoratedLink className="text-center" text={project.title} />
      </Link>
      <div className="flex items-center justify-center">
        <div className="inline-block">
          {project.tags.map((tag) => (
            <Tag key={tag} className="mr-2 mb-2" value={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface DecoratedLinkProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  text: string;
}

const DecoratedLink = React.forwardRef(
  (
    { href, onClick, className, text }: DecoratedLinkProps,
    ref: React.ForwardedRef<any>
  ) => (
    <a
      href={href}
      onClick={onClick}
      ref={ref}
      className={clsx(
        'block text-xl sm:text-2xl font-bold mb-2 hover:text-blue-700 cursor-pointer',
        className
      )}
    >
      {text}
    </a>
  )
);

interface RecentBlogProp {
  blogs: RecentBlog[];
}

function RecentBlog({ blogs }: RecentBlogProp) {
  return (
    <div className="inline-block">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 underline text-center">
        Recent Blogs
      </h1>
      {blogs.map((blog) => (
        <div key={`${blog.slug}`} className="mb-2">
          <Link href={`/blog/${blog.slug}`} passHref>
            <DecoratedLink text={blog.title} />
          </Link>
          {blog.tags.map((tag) => (
            <Tag key={tag} value={tag} className="mr-2 mb-2" />
          ))}
        </div>
      ))}
    </div>
  );
}

function Intro(): React.ReactElement {
  return (
    <div className="inline-block text-center">
      <img
        src="/images/avatar-circle-384x384.png"
        alt="Avatar"
        className="mb-4"
      />
      <div className="whitespace-pre text-2xl sm:text-3xl">
        {"Hello I'm"}
        <span className="text-pink-600">{' Chad Alen Adams'}</span>.
      </div>
      <div className="whitespace-pre text-2xl sm:text-3xl">
        {"I'm a Software Developer."}
      </div>
    </div>
  );
}

interface PageProps {
  featuredProject: FeaturedProject;
  recentBlogs: RecentBlog[];
}

export default function Page({ featuredProject, recentBlogs }: PageProps) {
  return (
    <>
      <Head>
        <title>Chad Alen - Home</title>
        <meta name="Description" content="Chad Alen's personal website." />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>

      <Layout>
        <div className="flex-grow bg-white p-2">
          <div className='flex justify-center items-center' style={{ height: "calc(100vh - 64px)" }}>
            <Intro />
          </div>
          <div className='flex justify-center items-center' style={{ height: "calc(100vh - 64px)" }}>
            <FeaturedProject project={featuredProject} />
          </div>
          <div className='flex justify-center items-center' style={{ height: "calc(100vh - 64px)" }}>
            <RecentBlog blogs={recentBlogs} />
          </div>
        </div>
      </Layout>
    </>
  );
}

interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  sort: number;
  slug: string;
}

interface RecentBlog {
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  timeToRead: string;
  ago: string;
  slug: string;
}

interface StaticProps {
  props: {
    featuredProject: Partial<FeaturedProject>;
    recentBlogs: Partial<RecentBlog>[];
  };
}

export async function getStaticProps(): Promise<StaticProps> {
  const featuredProject = getProjectBySlug('linuxappstore.md', [
    'title',
    'description',
    'tags',
    'previewImage',
    'sort',
    'slug',
  ]);

  const recentBlogs = getAllBlogs([
    'title',
    'date',
    'tags',
    'excerpt',
    'timeToRead',
    'ago',
    'slug',
  ]).slice(0, 5);
  return {
    props: {
      featuredProject,
      recentBlogs,
    },
  };
}
