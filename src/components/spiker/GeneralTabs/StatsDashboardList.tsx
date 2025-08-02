import { StatsDashboardData } from "@/constants/index.constanta";
import StatsDashboard from "./StatsDashboardCard";

export default function StatsDashboardList() {
    return (
        <div className="flex items-center justify-between mt-[37px]">
            {
                StatsDashboardData.map((element, value) => {
                    return <StatsDashboard key={value} data={element} />
                })
            }
        </div>
    )
}
