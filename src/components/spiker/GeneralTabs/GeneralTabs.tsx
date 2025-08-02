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
           <StatsDashboardList/>
        </div>
    )
}
