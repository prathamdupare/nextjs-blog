import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const PostCard = () => {
  return (
    <div className="flex flex-row gap-6">
      <Card>
        <div className="flex  ">
          <Image src="/contact.png" alt="" height={300} width={300} />
        </div>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription className="max-w-[200px]">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PostCard;
