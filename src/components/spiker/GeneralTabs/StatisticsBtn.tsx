import sortIcons from "@/assets/icons/GeneralIconsSort.svg"
export default function StatisticsBtn() {
    return (
        <button className="flex items-center justify-center gap-[10px] border-1 border-[#D9D9D9] rounded-[15px] font-medium text-[16px] text-[#1C1C1C] leading-[#1C1C1C] pl-[27px] pr-[24px] py-[12px]">
            <img src={sortIcons} alt="sortIcons" />
            Yil bo’yicha
        </button>
    )
}
