import { RootState } from "@/app/store";
import CommentsTabs from "@/components/spiker/comments/CommentsTabs";
import CoursesTabs from "@/components/spiker/courses/CoursesTabs";
import FinanceTabs from "@/components/spiker/finance/FinanceTabs";
import GeneralTabs from "@/components/spiker/GeneralTabs/GeneralTabs";
import StudentsTabs from "@/components/spiker/students/StudentsTabs";
import { setTabs } from "@/features/SpiketTabsSlice";
import { styles } from "@/styles/index.styles";
import { useDispatch, useSelector } from "react-redux";

export default function Spiker() {
    const { activeTabs } = useSelector((state: RootState) => state.SpikerTabsSlice)
    const dispatch = useDispatch();
    return (
        <div className="w-full">
            <div className={`${styles.Container}`}>
                <div className="flex items-start gap-[40px] mt-[24px] border-b-2 border-[#1111110F] mb-[30px]">
                    <button onClick={() => dispatch(setTabs("general"))}
                        className={`${styles.spikerBtn} ${activeTabs === "general" ? "text-[#006AFF] border-[#006AFF]" : "text-[#999999] border-[#1111110F]"}`}
                        >Umumiy</button>
                    <button onClick={() => dispatch(setTabs("students"))} 
                    className={`${styles.spikerBtn} ${activeTabs === "students" ? "text-[#006AFF] border-[#006AFF]" : "text-[#999999] border-[#1111110F]"}`}>Studentlar</button>
                    <button onClick={() => dispatch(setTabs("courses"))} className={`${styles.spikerBtn} ${activeTabs === "courses" ? "text-[#006AFF] border-[#006AFF]" : "text-[#999999] border-[#1111110F]"}`}>Kurslar</button>
                    <button onClick={() => dispatch(setTabs("finance"))} className={`${styles.spikerBtn} ${activeTabs === "finance" ? "text-[#006AFF] border-[#006AFF]" : "text-[#999999] border-[#1111110F]"}`}>Moliya</button>
                    <button onClick={() => dispatch(setTabs("comments"))} className={`${styles.spikerBtn} ${activeTabs === "comments" ? "text-[#006AFF] border-[#006AFF]" : "text-[#999999] border-[#1111110F]"}`}>Izohlar</button>
                </div>
                {activeTabs === "general" && <GeneralTabs />}
                {activeTabs === "students" && <StudentsTabs />}
                {activeTabs === "courses" && <CoursesTabs />}
                {activeTabs === "finance" && <FinanceTabs />}
                {activeTabs === "comments" && <CommentsTabs />}
            </div>
        </div>
    )
}
