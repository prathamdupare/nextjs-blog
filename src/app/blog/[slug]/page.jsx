import { getPost, getUser } from "@/lib/data";
import Image from "next/image";
import React from "react";

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  const user = await getUser(post.userId);
  return (
    <div className="flex flex-col h-full  md:flex-row gap-3">
      <div className="">
        <Image
          src={post.img}
          alt="blog image"
          className="hidden h-[700px] object-cover md:block"
          height={500}
          width={600}
        />
      </div>
      <div className="pl-3">
        <div>
          <h1 className="text-[30px]">{post.title}</h1>
        </div>
        <div></div>
        <div className="flex flex-row my-5 gap-3">
          <div className="min-w-[30px] ">
            <Image
              src={
                user.img
                  ? user.img
                  : `https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
              }
              className="rounded-full"
              alt="blog image"
              height={30}
              width={30}
            />
          </div>

          <div>
            <p className="font-xs text-gray-500 dark:text-gray-400">Author</p>
            <p>{user.username}</p>
          </div>

          <div>
            <p className="font-xs text-gray-500 dark:text-gray-400">
              Published
            </p>
            <p>01.01.2024</p>
          </div>
        </div>
        <p className="max-w-[600px]">{post.desc} </p>
      </div>
    </div>
  );
};
export default SinglePostPage;
