import { financeCardsData, FinanceStatsDashboardData } from "@/constants/index.constanta";
import StatisticsBtn from "../GeneralTabs/StatisticsBtn";
import StatsDashboardCard from "../GeneralTabs/StatsDashboardCard";
import { styles } from "@/styles/index.styles";
import FinanceCard from "./FinanceCard";
import FinanceChart from "./FinanceChart";
import ArrowSquareRight from "@/components/icons/ArrowSquareRight";
import SelectComponent from "./SelectComponent";
export default function FinanceTabs() {
  const style = {
    styleBtn: "border-1 border-[#D9D9D9] rounded-[15px] bg-transparent text-[14px] text-main-black leading-[100%] font-medium w-[170px] h-[41px]",
    styleBox: "border-1 border-[#EDEDED] rounded-[15px] px-[30px] py-[30px]",
    styleCub: "w-[24px] h-[24px] rounded-[5px]",
    styleTitles: "font-extrabold text-[16px] leading-[100%] text-main-black flex items-center gap-[10px]"
  }
  return (
    <div className="pb-[90px]">
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
      <div className="mt-[50px] grid grid-cols-2 justify-between gap-[30px]">
        <div className={`${style.styleBox}`}>
          <div className="flex justify-between">
            <h4 className={`${styles.studentsTitle}`}>
              Tranzaksiyalar tarixi
              <span className="block mt-[30px] text-[16px] text-main-gray font-medium">
                23-May 2022
              </span>
            </h4>
            <div>
              <p className="text-[16px] text-main-gray font-semibold leading-[100%]">Sana bo’yicha filtrlash</p>
              <div className="flex items-center gap-[30px] mt-[22px]">
                <button className={`${style.styleBtn}`}>Boshlanish sanasi</button>
                <button className={`${style.styleBtn}`}>Tugash sanasi</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[30px] mt-[20px]">
            {
              financeCardsData.map((element, value) => {
                return <FinanceCard data={element} key={value} />
              })
            }
          </div>
        </div>
        <div className={`${style.styleBox}`}>
          <h3 className={`${styles.studentsTitle}`}>Monitoring grafigi</h3>
          <div className="my-[30px] flex items-center gap-[50px]">
            <p className={`${style.styleTitles}`}>
              <div className={`${style.styleCub} bg-[#006AFF]`}></div>
              Tushumlar
            </p>
            <p className={`${style.styleTitles}`}>
              <div className={`${style.styleCub} bg-[#EF2B23]`}></div>
              Chiqimlar
            </p>
          </div>
          <FinanceChart />
        </div>
      </div>
      <div className="mt-[20px] flex justify-between max-w-[650px] px-[30px]">
        <div className="flex items-center gap-[20px]">
          <p className="text-main-gray text-[14px] leading-[100%] font-normal">Displaying 7 out of 120</p>
         <SelectComponent/>
        </div>
        <div className="flex items-center gap-[20px]">
          <ArrowSquareRight style="w-[24px] h-[24px] stroke-[#80B5FF] rotate-180" />
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <ArrowSquareRight style="w-[24px] h-[24px] stroke-[#80B5FF] " />
        </div>
      </div>
    </div>
  )
}
