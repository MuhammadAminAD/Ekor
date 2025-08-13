import { FinanceStatsDashboardData, financeTabsStudentsData } from "@/constants/index.constanta";
import StatisticsBtn from "../GeneralTabs/StatisticsBtn";
import StatsDashboardCard from "../GeneralTabs/StatsDashboardCard";
import { BuyCoursesChart } from "../courses/BuyCoursesChart";
import { ShowCoursesChart } from "../courses/ShowCoursesChart";
import { styles } from "@/styles/index.styles";
import InfoStudents from "../courses/InfoStudents";
import InfoStudentsPagination from "../courses/InfoStudentsPagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCoursesTabs } from "@/features/CoursesTabsSlice";
import ArrowSquareRight from "@/components/icons/ArrowSquareRight";
import { RootState } from "@/app/store";
export default function AboutCourses() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [paginatedItems, setPaginatedItems] = useState(financeTabsStudentsData.slice(0, 11));
    const [totalPages, setTotalPages] = useState<number>(0);
    useEffect(() => {
        const itemsPerPage = 10;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedItems(financeTabsStudentsData.slice(startIndex, endIndex));
        const totalPages = Math.ceil(financeTabsStudentsData.length / itemsPerPage);
        setTotalPages(totalPages);
    }, [currentPage]);
    const handleNext = () => {
        const totalPages = Math.ceil(financeTabsStudentsData.length / 10);
        if (totalPages > currentPage)
            setCurrentPage((prev) => prev + 1);
    }
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    }
    const { coursesName} = useSelector((state: RootState) => state.CoursesTabsSlice);
    const dispatch = useDispatch();
    const styleParagraph = "text-[14px] text-main-gray leading-[100%] font-normal"
    return (
        <div className="pb-[183px]">
            <div className="flex items-center justify-between">
                <h3 onClick={() => dispatch(setOpenCoursesTabs({open : false}))} className="font-black text-[28px] text-[Umumiy statistika] leading-[100%] flex items-center gap-[10px] cursor-pointer ">
                    <ArrowSquareRight style="w-[20px] h-[20px] stroke-[#1C1C1C] rotate-180"/>
                    {coursesName}
                </h3>
                <StatisticsBtn />
            </div>
            <div className="grid grid-cols-4 items-center gap-[30px] justify-between mt-[42px] ">
                {
                    FinanceStatsDashboardData.map((element, value) => {
                        return <StatsDashboardCard key={value} data={element} />
                    })
                }
            </div>
            <div className="grid grid-cols-2 justify-between gap-[30px] border-1 border-[#EDEDED] rounded-[15px] mt-[50px] py-[30px] px-[30px]">
                <div>
                    <h3 className={`${styles.studentsTitle}`}>Sotib olish / kursni boshlash jadvali</h3>
                    <BuyCoursesChart />
                </div>
                <div>
                    <h3 className={`${styles.studentsTitle}`}>Kurs sahifasiga tashriflar jadvali</h3>
                    <ShowCoursesChart />
                </div>
            </div>
            <div className="mt-[50px] border-1 border-[#EDEDED] rounded-[15px] p-[30px] ">
                <h3 className={`${styles.studentsTitle} mb-[30px]`}>
                    Studentlar ma’lumotlari
                </h3>
                <div>
                    <div className="grid grid-cols-6 justify-between w-full border-b-1 border-[#D9D9D9] py-[20px] pl-[32px]">
                        <p className={`${styleParagraph}`}>Foydalanuvchi</p>
                        <p className={`${styleParagraph}`}>Telefon raqam</p>
                        <p className={`${styleParagraph}`}>Birinchi foydalanish</p>
                        <p className={`${styleParagraph}`}>Kirishlar soni</p>
                        <p className={`${styleParagraph}`}>Aktivlik</p>
                        <p className={`${styleParagraph}`}>Summa</p>
                    </div>
                    {
                        paginatedItems.map((element, value) => {
                            return <InfoStudents data={element} key={value} />
                        })
                    }
                    <div className="mt-[30px]">
                        <InfoStudentsPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onNext={handleNext}
                            onPrevious={handlePrevious}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}