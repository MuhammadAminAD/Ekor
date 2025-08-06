import { FinanceStatsDashboardData } from "@/constants/index.constanta";
import StatisticsBtn from "../GeneralTabs/StatisticsBtn";
import StatsDashboardCard from "../GeneralTabs/StatsDashboardCard";
import { BuyCoursesChart } from "./BuyCoursesChart";
import { ShowCoursesChart } from "./ShowCoursesChart";

export default function FinanceTabs() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-black text-[28px] text-[Umumiy statistika] leading-[100%] ">
          Moliya bo’yicha statistika
        </h3>
        <StatisticsBtn />
      </div>
      <div className="grid grid-cols-4 items-center gap-[30px] justify-between mt-[42px]">
        {
          FinanceStatsDashboardData.map((element, value) => {
            return <StatsDashboardCard key={value} data={element} />
          })
        }
      </div>
      <div className="grid grid-cols-2 justify-between gap-[30px] border-1 border-[#EDEDED] rounded-[15px] mt-[50px] py-[30px] px-[30px]">
        <div>
          <h3 className="font-semibold text-[20px] leading-[100%] text-main-black mb-[30px]">Sotib olish / kursni boshlash jadvali</h3>
          <BuyCoursesChart />
        </div>
        <div>
          <h3 className="font-semibold text-[20px] leading-[100%] text-main-black mb-[30px]">Kurs sahifasiga tashriflar jadvali</h3>
          <ShowCoursesChart />
        </div>
      </div>
    </div>
  )
}
