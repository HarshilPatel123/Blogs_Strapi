import Link from "next/link";
import React from "react";
import Image from "next/image";



async function fetchBlog(id: number){
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }

  try{
    const res = await fetch(`http://127.0.0.1:1337/api/blogs/${id}?populate=*`, options);
    const response = await res.json();
    return response;

  }catch(err){
    console.error(err)
  }
  
}


const page = async ({params}: any) => {

  const blog = await fetchBlog(params.id);

  const image = "http://127.0.0.1:1337" + blog.data.attributes.Image.data.attributes.url;
  return (
    <div className="max-w-3xl mx-auto  p-4">
      <Link className="text-2xl" href={"/"}>{"<Back"}</Link>
      <div className="relative w-full h-96 overflow-hidden rounded-lg mt-5">
        <Image
          layout="fill"
          objectFit="cover"
          src={image}
          alt={""}
          className="rounded-t-lg"
        />
      </div>
      <div>
        <h1 className="text-3xl font-semibold mt mt-8"> {blog.data.attributes.Title} </h1>
        <p className="text-gray-600 mt-6"> {blog.data.attributes.Description}</p>
        <div>
            <span className="text-sm mt-12">
                Published on {" "}{new Date(blog.data.attributes.publishedAt).toLocaleString()}
            </span>
        </div>
      </div>
    </div>
  );
};

export default page;
