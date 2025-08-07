import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"
const chartData = [
    { month: "Yan", value: 220 },
    { month: "Fev", value: 310 },
    { month: "Mar", value: 420 },
    { month: "Apr", value: 600 },
    { month: "May", value: 350 },
    { month: "Iyun", value: 250 },
    { month: "Iyul", value: 270 },
    { month: "Avg", value: 480 },
    { month: "Sen", value: 520 },
    { month: "Okt", value: 400 },
    { month: "Noy", value: 370 },
    { month: "Dek", value: 300 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    }
} satisfies ChartConfig

export function ShowCoursesChart() {
    return (
        <Card className={cn(`border-none shadow-none`)}>
            <CardHeader>
                <CardTitle className={cn(`font-medium text-[16px] text-main-black leading-[100%] mb-[31px]`)}>Soni</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: -20,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke="rgba(17, 17, 17, 0.06)" strokeWidth={1} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                            className="fill-[#999999] text-[16px] font-medium leading-[100%]"
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            ticks={[0, 200, 500, 1000]}
                            className="fill-[#999999] text-[12px] font-medium leading-[100%]"
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            dataKey="value"
                            type="natural"
                            fill="rgba(47, 128, 237, 0.3)"
                            fillOpacity={1}
                            stroke="#006AFF"
                            strokeWidth={3}
                            stackId="any"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
