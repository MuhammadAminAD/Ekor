import star from "@/assets/icons/star.svg";
import TeacherIcon from "../icons/TeacherIcon";
import FrameIcon from "../icons/FrameIcon";
import { useNavigate } from "react-router-dom";
import { Post } from "@/types/post.types";
import { useState } from "react";
import savedIcon from "@/assets/icons/savedIcon.svg";
import bookIcon from "@/assets/icons/book-saved.svg";
interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  return (
    <div className="cursor-pointer">
      <img
        onClick={() => post._id && navigate(`/cours-inside/${post._id}`)}
        src={post.cover}
        alt={post.name}
        loading="lazy"
        className="rounded-[15px]"
      />
      <div className="flex justify-between mt-[20px]">
        <h2 className="max-w-[336px] font-medium text-[20px] leading-[100%] text-[#006AFF]">
          {post.name}
        </h2>
        <button className="cursor-pointer" onClick={() => setSaved(!saved)}>
          {saved ? (
            <img src={savedIcon} alt="" />
          ) : (
            <FrameIcon className="text-[#3f587a]" />
          )}
        </button>
      </div>
      <a className="block text-[#1C1C1C] underline text-[16px] leading-[100%] my-[10px]">
        {`${post.owner.firstName} ${post.owner.lastName}`}
      </a>
      <div className="flex gap-[30px]">
        <div className="flex items-center gap-[10px]">
          <img src={star} alt="rating" />
          <h3 className="text-[#006AFF] text-[16px] leading-[100%]">
            {0}
            <span className="text-[gray] ml-[5px]">{(0).toLocaleString()}</span>
          </h3>
        </div>
        <div className="flex items-center gap-[10px]">
          <TeacherIcon className="text-[#006AFF]" />
          <h3 className="text-[#006AFF] text-[16px] leading-[100%]">
            {post.number_sales?.toLocaleString() ?? 0}
          </h3>
        </div>
      </div>
      <div className="flex justify-between mt-[20px] items-center">
        {post.price ? (
          <div>
            <span className="text-[16px] mb-[5px] leading-[100%] text-[#999999] line-through ">
              Eski narx
            </span>
            <h3 className="text-[18px] font-medium leading-[100%] text-[#1c1c1c] ">
              {post.price} so'm
            </h3>
          </div>
        ) : (
          <h3 className="text-[18px] font-medium leading-[100%] text-[#1c1c1c] ">
            Bepul{" "}
            <span className="!text-[16px]  leading-[100%] !text-[#999999] line-through ">
              so'm{" "}
            </span>
          </h3>
        )}
        <button className="border-[1px] border-[#006aff] rounded-[15px] py-[12px] px-[20px] cursor-pointer ">
          {" "}
          <img src={bookIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PostItem;
