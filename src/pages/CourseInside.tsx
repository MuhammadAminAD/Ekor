import { styles } from "@/styles/index.styles";
import courseImg from '../assets/img/course.png'
import CourseItem from "@/components/CourseInside/CourseItem";
import CourseTabs from "@/components/CourseInside/CourseTabs";

export default function CourseInside() {
    return (
        <div className={`${styles.Container} mt-[60px] flex`}>
            <div className="w-full">
                <img className="" src={courseImg} alt="" />
                <CourseTabs />
            </div>
            <div className="max-w-[580px]">
                <CourseItem />
            </div>
        </div>
    )
}
