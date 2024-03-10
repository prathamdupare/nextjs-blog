import Image from "next/image";
import React from "react";

const SinglePostPage = ({ params }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div>
        <Image
          src="https://images.pexels.com/photos/20425642/pexels-photo-20425642/free-photo-of-magnolia.jpeg"
          alt="blog image"
          className="hidden md:block"
          height={500}
          width={600}
        />
      </div>
      <div className="pl-3">
        <div>
          <h1 className="text-[30px]">{params.slug}</h1>
        </div>
        <div className="flex flex-row my-5 gap-3">
          <div className="min-w-[30px]">
            <Image
              src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-full"
              alt="blog image"
              height={30}
              width={30}
            />
          </div>

          <div>
            <p className="font-xs text-gray-500 dark:text-gray-400">Author</p>
            <p>Pratham Dupare</p>
          </div>

          <div>
            <p className="font-xs text-gray-500 dark:text-gray-400">
              Published
            </p>
            <p>01.01.2024</p>
          </div>
        </div>
        <p className="max-w-[600px]">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </div>
    </div>
  );
};
export default SinglePostPage;
