import chevronIcons from '@/assets/icons/CoursesTabsIconsInSpiker.svg'
import { buyCoursesTabsData } from '@/constants/index.constanta'
import CoursesTabsDiv from './CoursesTabsDiv'
import CoursesTabsPagination from './CoursesTabsPagination'
import { useEffect, useState } from 'react'
export default function CoursesTabs() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedItems, setPaginatedItems] = useState(buyCoursesTabsData.slice(0, 3));
  const [totalPages, setTotalPages] = useState<number>(0);
  useEffect(() => {
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedItems(buyCoursesTabsData.slice(startIndex, endIndex));
    const totalPages = Math.ceil(buyCoursesTabsData.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [currentPage]);
  const handleNext = () => {
    const totalPages = Math.ceil(buyCoursesTabsData.length / 3);
    if (totalPages > currentPage)
      setCurrentPage((prev) => prev + 1);
  }
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }
  return (
    <div>
      <div className="bg-[#F6F6F6] w-full rounded-[15px] px-[30px] pt-[20px] pb-[282px] ">
        <div className="flex items-center justify-between border-b-1 border-[#D9D9D9] pb-[20px]">
          <div className="flex items-center gap-[30px]">
            <p className='text-main-gray text-[16px] leading-[100%] font-normal'>
              №
            </p>
            <p className='text-main-gray text-[16px] leading-[100%] font-normal'>Nomi</p>
          </div>
          <div className="grid max-w-[677px] grid-cols-4 items-center gap-[100px]">
            <p className='flex items-center gap-[10px] text-main-gray text-[16px] leading-[100%] font-normal'>Yuklangan sana
              <img src={chevronIcons} alt="" />
            </p>
            <p className='flex items-center gap-[10px] text-main-gray text-[16px] leading-[100%] font-normal'>Byudjet
              <img src={chevronIcons} alt="" />
            </p>
            <p className='flex items-center gap-[10px] text-main-gray text-[16px] leading-[100%] font-normal'>Status
              <img src={chevronIcons} alt="" />
            </p>
          </div>
        </div>
        {paginatedItems.map((element, value) => {
          return <CoursesTabsDiv data={element} key={value} />
        })}
      </div>
      <div className='mt-[36px] flex items-center justify-between'>
        <p>Displaying {paginatedItems.length} out of {buyCoursesTabsData.length}</p>
        <CoursesTabsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  )
}
