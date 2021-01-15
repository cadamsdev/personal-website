import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';
import Card from '../components/Card';
import Tag from '../components/Tag';
import Breadcrumb from '../components/Breadcrumb';
import { getAllBlogs } from '../../lib/api';

export default function Page({ blogs }) {
  return (
    <Layout>
      <Breadcrumb aria-label="breadcrumb" className="mb-4 mt-2">
        <Breadcrumb.Item to={'/'}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Blog</Breadcrumb.Item>
      </Breadcrumb>

      {blogs.map((blog, index) => (
        <Link key={index} href={`/blog/${blog.slug}`} passHref>
          <a>
          <Card className="mb-4">
            <div className="flex">
              <div>
              <div className="flex items-center mb-2">
                  <img
                    src='/images/avatar-circle.png'
                    alt="Avatar"
                    className="rounded inline-block mr-2"
                    style={{ width: '48px' }}
                  />

                  <div className="inline-block text-base">
                    <div className="font-bold">Chad Adams</div>
                    <div className="text-base text-gray-500">
                      {blog.date}
                    </div>
                  </div>
                </div>

                <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>

                <div>
                  {blog.tags &&
                    blog.tags.map((tag, index) => {
                      return (
                        <Tag key={index} className="mr-2 mb-2">
                          {tag}
                        </Tag>
                      );
                    })}
                </div>
              </div>
            </div>
            <hr className="mb-4 mt-2" />
            <p className="text-base mb-2">{blog.excerpt}</p>
            <p className="inline-block text-base">{blog.timeToRead}</p>
          </Card>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const blogs = getAllBlogs([
    'title',
    'date',
    'tags',
    'excerpt',
    'timeToRead',
    'slug',
  ]);
  return {
    props: { blogs }
  };
}
