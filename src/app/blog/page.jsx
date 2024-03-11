import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const page = async () => {
  const posts = await getPosts();
  return (
    <div className="h-full  flex gap-2 m-2">
      {posts.map((post) => (
        <div className="" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default page;
