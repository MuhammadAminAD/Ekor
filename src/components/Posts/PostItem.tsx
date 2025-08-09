import star from "@/assets/icons/star.svg";
import TeacherIcon from "../icons/TeacherIcon";
import FrameIcon from "../icons/FrameIcon";
import img from "@/assets/img/BiznesCoursePicture.png";
import { useNavigate, useParams } from "react-router-dom";

const PostItem = () => {

  const navigate = useNavigate();
  const {id} = useParams()
  return (
    <div onClick={() => navigate(`/cours-inside/${id}`)} className="cursor-pointer">
      <img src={img} alt="" />
      <div className="flex justify-between mt-[20px] ">
        <h2 className="max-w-[336px] font-medium text-[20px] leading-[100%] text-[#006AFF] ">
          Biznesda sherikchilik va halollik asoslari
        </h2>
        <FrameIcon className="text-[#3f587a]" />
      </div>
      <a className="block text-[#1C1C1C] underline text-[16px] leading-[100%] my-[10px] ">
        Husan Mamasaidov
      </a>
      <div className="flex gap-[30px]">
        <div className="flex items-center gap-[10px]">
          <img src={star} alt="" />
          <h3 className="text-[#006AFF] text-[16px] leading-[100%] ">
            4.7
            <span className="text-[gray] ml-[5px]">(54.110)</span>
          </h3>
        </div>
        <div className="flex items-center gap-[10px]">
          <TeacherIcon className="text-[#006AFF]" />
          <h3 className="text-[#006AFF] text-[16px] leading-[100%] ">
            114,554
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
