import { IfinanceCards } from "@/types/index.types"

type Props = {
    data: IfinanceCards
}
export default function FinanceCard({ data }: Props) {
    return (
        <div>
            {data?.payDate && <p className="text-main-gray text-[16px] leading-[100%] font-medium mb-[30px]">{data.payDate}</p>}
            <div className="w-full bg-[#F6F6F6] rounded-[15px] px-[30px] py-[30px] flex items-center justify-between">
                <div className="flex gap-[20px] items-center">
                    <img src={data.icons} alt={data.cardNum} />
                    <h4 className="font-semibold text-main-black text-[20px] leading-[100%]">
                        {data.cardNum}
                        <span className="block mt-[5px] text-[14px] text-main-gray font-medium">{data.date}</span>
                    </h4>
                </div>
                <h5 className={`${data.cardNum.toLocaleLowerCase() === "Elektron hamyon".toLocaleLowerCase() ? "text-[#0CC14A] " : "text-[#EF2B23]"} text-[20px] font-semibold leading-[100%]`}>
                    {data.summa} UZS
                </h5>
            </div>
        </div>
    )
}
