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
  { gender: "Erkaklar", visitors: 76, fill: "#80B5FF" },
  { gender: "Ayollar", visitors: 24, fill: "#999999" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  }
} satisfies ChartConfig

export function StudentsGenderChart() {
  return (
    <Card className="flex items-center border-1 border-[#D9D9D9] rounded-[15px] h-auto shadow-none">
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
              nameKey="gender"
              innerRadius={90}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-[20px] items-start">
        <div className="flex items-center gap-[20px]">
          <div className="w-[24px] h-[24px] bg-[#80B5FF] rounded-[4px]"></div>
          <span className={`${styles.studentsChartPercent}`}>
            {chartData[0].visitors}%
          </span>
          <span className={`${styles.studentsChartDesc}`}>
            Erkaklar
          </span>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="w-[24px] h-[24px] bg-[#999999] rounded-[4px]"></div>
          <span className={`${styles.studentsChartPercent}`}>
           {chartData[1].visitors}%
          </span>
          <span className={`${styles.studentsChartDesc}`}>
            Ayollar
          </span>
        </div>
      </CardFooter>
    </Card>
  )
}
