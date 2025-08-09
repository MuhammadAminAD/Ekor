import PostItem from "./PostItem";

const Posts = () => {
  return (
    <div className={`grid grid-cols-4 gap-[30px] mt-[24px]`}>
      <PostItem />
    </div>
  );
};

export default Posts;
