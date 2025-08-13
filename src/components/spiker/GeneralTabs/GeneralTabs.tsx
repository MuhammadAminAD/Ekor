import { styles } from "@/styles/index.styles";
import { GeneralChart } from "./GenerealChart";
import StatisticsBtn from "./StatisticsBtn";
import { StatsDashboardData } from "@/constants/index.constanta";
import StatsDashboardCard from "./StatsDashboardCard";

export default function GeneralTabs() {
    return (
        <div className="pb-[77px]">
            <div className="flex items-center justify-between">
                <h3 className="font-black text-[28px] text-[Umumiy statistika] leading-[100%] ">
                    Umumiy statistika
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
            <div className="flex items-center mt-[40px] gap-[30px] border-b-2 border-[#1111110F] w-max pb-[20px]">
                <h4 className={`${styles.generalTabsTitles}`}><span className="block">Umumiy foyda</span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">100 000 UZS</span> bu haftada
                </h4>
                <h4 className={`${styles.generalTabsTitles}`}><span className="block">Kursdan ro’yxatdan o’tganlar
                </span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">30 ta</span> bu haftada
                </h4>
                <h4 className={`${styles.generalTabsTitles}`}><span className="block">Umumiy reyting
                </span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">4.55</span> bu haftada
                </h4>
                <h4 className={`${styles.generalTabsTitles}`}><span className="block">Vaucher balansi
                </span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">500 000 UZS </span> bu haftada
                </h4>
            </div>
            <div className="w-[920px]">
                <GeneralChart />
            </div>
        </div>
    )
}
