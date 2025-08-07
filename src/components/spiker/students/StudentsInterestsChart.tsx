import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import { styles } from "@/styles/index.styles"
const chartData = [
    { interests: "Biznes", percent: 36 },
    { interests: "IT va dasturlash", percent: 48 },
    { interests: "Marketing", percent: 41 },
    { interests: "Sog'lik va fitnes", percent: 14 },
    { interests: "Shaxsiy o'sish", percent: 38 },
    { interests: "Ta'lim va ilmiy\n fanlar", percent: 33 },
    { interests: "Foto va video", percent: 36 },
    { interests: "Boshqa", percent: 32 },
]

const chartConfig = {
    desktop: {
        label: "o'quvchilar qiziqishlari",
        color: "#006AFF",
    }
} 

export function StudentsInterestsChart() {
    return (
        <Card className={cn(`border-1 border-[#D9D9D9] rounded-[15px] shadow-none`)}>
            <CardHeader>
                <CardTitle className={cn(`${styles.studentsTitle} mt-[30px]`)}>O’quvchilar qiziqishlari</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="interests"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            className="text-[14px] font-medium fill-[#999999] leading-[100%]"
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="percent" fill="#80B5FF" radius={10}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="text-[20px] font-medium fill-[#999999] leading-[100%]"
                                formatter={(val: number) => `${val}%`}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
