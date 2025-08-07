import { StatsDashboardData } from "@/constants/index.constanta";
import StatisticsBtn from "../GeneralTabs/StatisticsBtn";
import StatsDashboardCard from "../GeneralTabs/StatsDashboardCard";
import { CommentsChart } from "./CommentsChart";
import { styles } from "@/styles/index.styles";

export default function CommentsTabs() {
  return (
    <div className="pb-[246px]">
      <div className="flex items-center justify-between">
        <h3 className="font-black text-[28px] text-[Umumiy statistika] leading-[100%] ">
          Izohlar
        </h3>
        <StatisticsBtn />
      </div>
      <div className="grid grid-cols-4 gap-[30px] items-center justify-between mt-[37px]">
        {
          StatsDashboardData.map((element, value) => {
            return <StatsDashboardCard key={value} data={element} />
          })
        }
      </div>
      <div className="w-full border-1 border-[#EDEDED] rounded-[15px] px-[30px] py-[30px] mt-[50px]">
        <h3 className={`${styles.studentsTitle} mb-[30px]`}>Izohlar grafigi</h3>
        <CommentsChart/>
      </div>
    </div>
  )
}
