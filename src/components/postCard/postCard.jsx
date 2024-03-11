import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-row gap-6">
      <Card>
        <div className="flex ">
          <Image
            src={post.img}
            className="object-contain p-2 rounded-[15px]"
            alt="This is post image"
            height={300}
            width={300}
          />
        </div>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription className="max-w-[200px]">
            {post.desc}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href={`/blog/${post.slug}`}>Read More..</Link>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PostCard;
