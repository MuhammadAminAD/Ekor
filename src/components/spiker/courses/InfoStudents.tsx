import type { IfinanceTabsStudents } from "@/types/index.types"

type Props = {
    data : IfinanceTabsStudents
}
export default function InfoStudents({data} : Props) {
    const styleParagraph = "font-normal text-[14px] text-main-black leading-[100%]"
    return (
        <div className="grid grid-cols-6 justify-between w-full border-b-1 border-[#D9D9D9] py-[20px] pl-[32px]">
            <p className={`${styleParagraph}`}>{data.name}</p>
            <p className={`${styleParagraph}`}>{data.phone}</p>
            <p className={`${styleParagraph}`}>{data.firstUse}</p>
            <p className={`${styleParagraph}`}>{data.logins}</p>
            <p className={`w-[80px] h-[30px] bg-[#E7FEEF] text-[14px] leading-[100%] text-[#0CC14A] font-normal flex items-center justify-center`}>{data.activity}</p>
            <p className={`${styleParagraph}`}><span className="font-semibold">{data.sum}</span> UZS <span className="block mt-[5px] text-main-gray text-[12px]">150 000 UZS Vauch</span></p>
        </div>
    )
}
