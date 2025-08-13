import ArrowSquareRight from "@/components/icons/ArrowSquareRight"
import { setOpenCoursesTabs } from "@/features/CoursesTabsSlice"
import type { ICoursestabsData } from "@/types/index.types"
import { useDispatch, } from "react-redux"

type Props = {
    data: ICoursestabsData
}
export default function CoursesTabsDiv({ data }: Props) {
    const dispatch = useDispatch();
    return (
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] pb-[10px] mt-[10px]">
            <div className="flex items-center gap-[20px]">
                <p className='text-main-gray text-[16px] leading-[100%] font-normal mr-[16px]'>
                    {data?.id + 1}
                </p>
                <img src={data?.coursesIcons} alt={data?.courseName} />
                <p className='text-main-black text-[16px] leading-[100%] font-normal'>{data?.courseName}</p>
            </div>
            <div className="grid grid-cols-4 items-center gap-[100px]">
                <p className='flex items-center gap-[10px] text-main-black text-[16px] leading-[100%] font-normal '>{data?.date}
                </p>
                <p className='flex items-center gap-[10px] text-main-black text-[16px] leading-[100%] font-normal '>{data?.price} UZS
                </p>
                <p className='flex items-center gap-[10px] text-main-black text-[16px] leading-[100%] font-normal'>
                    <div className={`${data?.statusIconsColor} w-[10px] h-[10px] rounded-[50%] `}></div>
                    {data?.status}
                </p>
                <button onClick={() => dispatch(setOpenCoursesTabs({open : true , coursesName : data?.courseName}))} className="flex items-center gap-[10px] text-main-black text-[16px] font-normal leading-[100%] cursor-pointer group hover:text-main-blue">
                    {data?.moreDetails}
                    <ArrowSquareRight style="stroke-[#1C1C1C] group-hover:stroke-[#006AFF] w-[20px] h-[20px]" />
                </button>
            </div>
        </div>
    )
}
