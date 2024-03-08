import PostCard from "@/components/postCard/postCard";

const page = () => {
  return (
    <div>
      <div className="flex gap-2 flex-wrap items-center justify-center overflow-auto">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default page;
