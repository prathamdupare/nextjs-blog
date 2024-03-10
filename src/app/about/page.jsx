import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex h-full ">
      <div className="w-[90%] h-full flex flex-col justify-center">
        <h1 className="text-[40px] text-purple-700 dark:text-purple-400 font-bold">
          About Agency
        </h1>
        <h1 className="text-[30px] font-bold">
          We create digital ideas, that are bigger, bolder, braver and better.
        </h1>
        <p className="py-3">
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
        <div className="flex gap-6">
          <div>
            <h1 className="font-bold text-[40px] text-purple-700 dark:text-purple-400">
              10k+
            </h1>
            <p>Years of experience</p>
          </div>

          <div>
            <h1 className="font-bold text-[40px] text-purple-700 dark:text-purple-400">
              234k+
            </h1>

            <p>People reached</p>
          </div>
          <div>
            <h1 className="font-bold text-[40px] text-purple-700 dark:text-purple-400">
              5k+
            </h1>
            <p>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center hidden md:flex ">
        <Image src="/about.png" alt="" height={600} width={600} />
      </div>
    </div>
  );
};

export default page;
