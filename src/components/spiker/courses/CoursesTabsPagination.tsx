import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import arrowSquareLeftIcons from "@/assets/icons/arrow-square-left.svg"
import ArrowSquareRight from "@/components/icons/ArrowSquareRight"

type Props = {
    currentPage: number
    totalPages: number
    onNext: () => void
    onPrevious: () => void
}
export default function CoursesTabsPagination({ onNext, onPrevious, totalPages, currentPage }: Props) {
    return (
        <div>
            <Pagination>
                <PaginationContent className={cn(`gap-[20px]`)}>
                    <PaginationItem onClick={onPrevious}>
                        <img src={arrowSquareLeftIcons} alt="prevIcons" />
                    </PaginationItem>
                    {
                        Array.from({ length: totalPages }, (_, index) => {
                            return <PaginationItem className={currentPage === index + 1 ? "w-[24px] h-[24px] bg-[#80B5FF] text-center rounded-[8px]" : ""} key={index} >
                                {index + 1}
                            </PaginationItem>
                        })
                    }
                    <PaginationItem onClick={onNext}>
                        <ArrowSquareRight style="stroke-[#80B5FF] w-[24px] h-[24px]"/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}
