import { IStatsDashboard } from "@/types/index.types"

type Props = {
  data: IStatsDashboard
}
export default function StatsDashboardCard({ data }: Props) {
  return (
    <div className="bg-[#F6F6F6] rounded-[15px] flex items-center gap-[20px] py-[22px] max-w-[385px] pl-[25px]">
      <div className="w-[50px] h-[50px] bg-[#BFDAFF] rounded-[50%] flex items-center justify-center">
        <img src={data.icons} alt={data.title} />
      </div>
      <div>
        <h3 className="font-medium text-[16px] text-[#1C1C1C] leading-[100%] mb-[8px]">{data.title}</h3>
        <span className="font-semibold text-[24px] text-[#006AFF] leading-[100%]">{data.blueText}</span>
      </div>
    </div>
  )
}
