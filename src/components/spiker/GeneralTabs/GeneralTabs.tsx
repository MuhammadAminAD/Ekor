import { Chart } from "./Chart";
import StatisticsBtn from "./StatisticsBtn";
import StatsDashboardList from "./StatsDashboardList";

export default function GeneralTabs() {
    return (
        <div className="mt-[38px]">
            <div className="flex items-center justify-between">
                <h3 className="font-black text-[28px] text-[Umumiy statistika] leading-[100%] ">
                    Umumiy statistika
                </h3>
                <StatisticsBtn />
            </div>
            <StatsDashboardList />
            <div className="flex items-center mt-[40px] gap-[30px] border-b-2 border-[#1111110F] w-max pb-[20px]">
                <h4 className="font-normal text-[16px] text-[#999999] leading-[150%]  max-w-[245px]"><span className="block">Umumiy foyda</span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">100 000 UZS</span> bu haftada
                </h4>
                <h4 className="font-normal text-[16px] text-[#999999] leading-[150%]  max-w-[245px]"><span className="block">Kursdan ro’yxatdan o’tganlar
                </span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">30 ta</span> bu haftada
                </h4>
                <h4 className="font-normal text-[16px] text-[#999999] leading-[150%]  max-w-[245px]"><span className="block">Umumiy reyting
                </span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">4.55</span> bu haftada
                </h4>
                <h4 className="font-normal text-[16px] text-[#999999] leading-[150%]  max-w-[245px]"><span className="block">Vaucher balansi
                </span>
                    <span className="font-extrabold text-[20px] text-[#1C1C1C] ">500 000 UZS </span> bu haftada
                </h4>
            </div>
            <Chart/>
        </div>
    )
}
