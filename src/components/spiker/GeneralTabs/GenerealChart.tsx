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
    { Days: "Du", desktop: 2500000 },
    { Days: "Se", desktop: 1500000 },
    { Days: "Cho", desktop: 3000000 },
    { Days: "Pa", desktop: 2200000 },
    { Days: "Ju", desktop: 5200000 },
    { Days: "Sha", desktop: 5000000 },
    { Days: "Ya", desktop: 9700000 },
]
const chartConfig = {
    desktop: {
        color: "#006AFF",
    }
} satisfies ChartConfig

export function GeneralChart() {
    return (
        <Card className={cn(`border-none mt-[33px] shadow-none gap-0`)}>
            <CardHeader className="font-medium text-[16px] text-main-black leading-[100%] mb-[30px]">
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
                            dataKey="Days"
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
                            domain={[0, 10000000]}
                            ticks={[500000, 2000000, 5000000, 10000000]}
                            tickFormatter={(value) => `${value / 1000000}`}
                            className="text-[16px] leading-[100%] font-medium fill-[#999999]"
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Area
                            dataKey="desktop"
                            type="natural"
                            fill="rgba(47, 128, 237, 0.3)"
                            fillOpacity={1}
                            stroke="#006AFF"
                            strokeWidth={3}
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

