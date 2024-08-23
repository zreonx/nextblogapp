import { posts } from "@/data/post";
import Link from "next/link";
import React from "react";

export default function BlogsPage() {
  return (
    <div className='max-w-4xl mx-auto py-8 '>
      <h1 className='text-3xl font-bold mb-4'>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className='bg-slate-50 rounded-md shadow p-4'
          >
            <h2 className='text-xl font-semibold'>{post.title}</h2>
            <p>Written By: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
