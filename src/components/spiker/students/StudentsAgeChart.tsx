import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";

const chartData = [
  { age: "18-24", percent: 36 },
  { age: "25-34", percent: 48 },
  { age: "35-45", percent: 41 },
  { age: "45-54", percent: 14 },
  { age: "55+", percent: 38 },
];

const chartConfig = {
  percent: {
    label: "Yosh foizi",
    color: "#80B5FF",
  },
};

export function StudentsAgeChart() {
  return (
    <Card className={cn(`border-1 border-[#D9D9D9] rounded-[15px] h-auto shadow-none`)}>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{ top: 20 }}
            barCategoryGap={20}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="age"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-[20px] font-medium leading-[100%] fill-[#999999]"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="percent" fill="#80B5FF" radius={8}>
              <LabelList
                dataKey="percent"
                position="top"
                offset={12}
                className="text-[20px] font-medium text-[#999999]"
                formatter={(val: number) => `${val}%`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
