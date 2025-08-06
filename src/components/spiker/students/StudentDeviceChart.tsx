import { Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { styles } from "@/styles/index.styles"
export const description = "A donut chart"
const chartData = [
    { deviceType: "Desktop", visitors: 66, fill: "#006AFF" },
    { deviceType: "Mobile", visitors: 16, fill: "#80B5FF" },
    { deviceType: "Tablet", visitors: 10, fill: "#999999" },
    { deviceType: "TV", visitors: 8, fill: "#FC8873" },

]
const chartConfig = {
    visitors: {
        label: "Visitors",
    }
} satisfies ChartConfig

export function StudentsDeviceChart() {
    return (
        <Card className="flex flex-col gap-[30px] items-center border-1 border-[#D9D9D9] rounded-[15px] h-auto shadow-none">
            <CardContent>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-w-[385px] h-[337px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="deviceType"
                            innerRadius={90}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-[20px] items-start">
                <div className="flex items-center gap-[20px]">
                    <div className="flex items-center gap-[10px]">
                        <div className={`${styles.studentsChartBox} bg-[#006AFF]`}></div>
                        <span className={`${styles.studentsChartPercent}`}>
                            {chartData[0].visitors}%
                        </span>
                        <span className={`${styles.studentsChartDesc}`}>
                            Desktop
                        </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className={`${styles.studentsChartBox} bg-[#80B5FF]`}></div>
                        <span className={`${styles.studentsChartPercent}`}>
                            {chartData[1].visitors}%
                        </span>
                        <span className={`${styles.studentsChartDesc}`}>
                            Mobile
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-[36px]">
                    <div className="flex items-center gap-[10px]">
                        <div className={`${styles.studentsChartBox} bg-[#999999]`}></div>
                        <span className={`${styles.studentsChartPercent}`}>
                            {chartData[2].visitors}%
                        </span>
                        <span className={`${styles.studentsChartDesc}`}>
                            Tablet
                        </span>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <div className={`${styles.studentsChartBox} bg-[#FC8873]`}></div>
                        <span className={`${styles.studentsChartPercent}`}>
                            {chartData[3].visitors}%
                        </span>
                        <span className={`${styles.studentsChartDesc}`}>
                            TV
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
