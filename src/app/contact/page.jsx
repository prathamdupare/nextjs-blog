import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex h-full ">
      <div className=" w-full flex justify-center items-center hidden md:flex">
        <Image src="/contact.png" alt="" height={600} width={600} />
      </div>
      <div className="w-[90%] h-full flex flex-col gap-3 justify-center">
        <Input type="text" placeholder="Name and Surname" />
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Phone Number (Optional)" />
        <Textarea placeholder="Message" />
        <Button>Send message</Button>
      </div>
    </div>
  );
};

export default page;
