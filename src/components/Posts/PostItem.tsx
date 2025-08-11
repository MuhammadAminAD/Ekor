import star from "@/assets/icons/star.svg";
import TeacherIcon from "../icons/TeacherIcon";
import FrameIcon from "../icons/FrameIcon";
import { useNavigate } from "react-router-dom";
import { Post } from "@/types/post.types";

interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => post._id && navigate(`/cours-inside/${post._id}`)}
      className="cursor-pointer"
    >
      <img src={post.cover} alt={post.name} loading="lazy" />
      <div className="flex justify-between mt-[20px]">
        <h2 className="max-w-[336px] font-medium text-[20px] leading-[100%] text-[#006AFF]">
          {post.name}
        </h2>
        <FrameIcon className="text-[#3f587a]" />
      </div>
      <a className="block text-[#1C1C1C] underline text-[16px] leading-[100%] my-[10px]">
        {`${post.owner.firstName} ${post.owner.lastName}`}
      </a>
      <div className="flex gap-[30px]">
        <div className="flex items-center gap-[10px]">
          <img src={star} alt="rating" />
          <h3 className="text-[#006AFF] text-[16px] leading-[100%]">
            {0}
            <span className="text-[gray] ml-[5px]">
              {(0).toLocaleString()}
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-[10px]">
          <TeacherIcon className="text-[#006AFF]" />
          <h3 className="text-[#006AFF] text-[16px] leading-[100%]">
            {post.number_sales?.toLocaleString() ?? 0}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
