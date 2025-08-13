import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"

const chartData = [
    { month: "Yan", tushumlar: 2500000, chiqimlar: 1000000 },
    { month: "Fev", tushumlar: 2300000, chiqimlar: 1200000 },
    { month: "Mar", tushumlar: 900000, chiqimlar: 1500000 },
    { month: "Apr", tushumlar: 7500000, chiqimlar: 1400000 },
    { month: "May", tushumlar: 2500000, chiqimlar: 1200000 },
    { month: "Iyun", tushumlar: 5000000, chiqimlar: 1300000 },
    { month: "Iyul", tushumlar:10000000, chiqimlar: 1500000 },
    { month: "Avg", tushumlar: 7500000, chiqimlar: 2200000 },
    { month: "Sen", tushumlar: 6500000, chiqimlar: 5200000 },
    { month: "Okt", tushumlar: 5500000, chiqimlar: 7200000 },
    { month: "Noy", tushumlar: 3500000, chiqimlar: 7500000 },
    { month: "Dek", tushumlar: 3700000, chiqimlar: 7400000 },
];
const chartConfig = {
    tushumlar: {
        label: "Tushumlar",
        color: "rgba(0, 106, 255, 0)"
    },
    chiqimlar: {
        label: "Chiqimlar",
        color: "rgba(239, 43, 35, 1)"
    },
} satisfies ChartConfig;

export default function FinanceChart() {
    return (
        <Card className={cn(`border-none shadow-none`)}>
            <CardHeader className={cn(`font-medium text-[16px] text-main-black leading-[100%]`)}>
                Summa (mln formatda)
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
                            className="text-[16px] leading-[100%] font-medium fill-[#999999]"
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            ticks={[500000, 2000000, 5000000, 10000000]}
                            tickFormatter={(value) => `${value / 1000000} `}
                            className="text-[16px] leading-[100%] font-medium fill-[#999999]"
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            dataKey="chiqimlar"
                            type="natural"
                            fill="rgba(239, 43, 35, 0.5)"
                            fillOpacity={1}
                            stroke="rgba(239, 43, 35, 1)"
                            strokeWidth={2}
                            stackId="a"
                        />
                        <Area
                            dataKey="tushumlar"
                            type="natural"
                            fill="rgba(0, 106, 255, 0.5)"
                            fillOpacity={1}
                            stroke="rgba(0, 106, 255, 0)"
                            strokeWidth={2}
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
