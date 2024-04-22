
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Blog = ({blog}: any) => {

  const truncate = blog.attributes.Description.length > 80?
  blog.attributes.Description.substring(0, 80) + "..."
  : blog.attributes.Description

  const image = "http://127.0.0.1:1337" + blog.attributes.Image.data.attributes.url;

  return (
    <div className='rounded-lg shadow-md p-4 overflow-hidden border border-gray-600 cursor-pointer mb-4'>
      <Link href={`/blog/${blog.id}`}>
        <div className='relative w-[100%] h-1' style={{paddingBottom: "80%" }}>
            <Image layout="fill" objectFit='cover' src={image} alt={""} className="rounded-t-lg"/>
        </div>
        <div className='p-2'>
            <h2 className='text-xl font-semibold mb-2 overflow-ellipsis'>
                {blog.attributes.Title}
            </h2>
            <p className='text-gray-600'>
              {truncate}
            </p>
        </div>
      </Link>
    </div>
  )
}

export default Blog
