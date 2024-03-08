import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex h-full ">
      <div className="w-[90%] h-full flex flex-col justify-center">
        <h1 className="text-[70px] font-bold">Creative Thoughts Agency</h1>
        <p className="py-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          magnam dignissimos quaerat officia ad earum vero expedita
        </p>
        <div className="flex gap-3">
          <Button>Learn More</Button>
          <Button>Contact</Button>
        </div>

        <div>
          <Image src="/brands.png" alt="" height={300} width={600} />
        </div>
      </div>
      <div className=" w-full flex justify-center items-center ">
        <Image src="/hero.gif" alt="" height={600} width={600} />
      </div>
    </div>
  );
};

export default Home;
