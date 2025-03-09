"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function AnalyticsChart() {
  const chartData = [
    { month: "Jan", income: 37000, outcome: 25000 },
    { month: "Feb", income: 25000, outcome: 32000 },
    { month: "Mar", income: 41000, outcome: 22000 },
    { month: "Apr", income: 38000, outcome: 28000 },
    { month: "May", income: 32000, outcome: 35000 },
    { month: "Jun", income: 25000, outcome: 22000 },
    { month: "Jul", income: 22000, outcome: 28000 },
    { month: "Aug", income: 20000, outcome: 25000 },
  ];
  const amountFormatter = (tick: number) => {
    const amount = tick / 1000;

    return `$${amount}k`;
  };
  const chartConfig = {
    income: {
      label: "Income",
      color: "var(--chart-2)",
    },
    outcome: {
      label: "Outcome",
      color: "var(--chart-1)",
    },
  };

  return (
    <Card className="w-full rounded-lg bg-primary @md:p-6 p-4 border-none text-foreground">
      <CardHeader className="px-0">
        <div className="mb-6 flex flex-col @md:flex-row  items-start @md:items-center justify-between">
          <h2 className="text-lg @md:text-2xl font-semibold">Analytics</h2>
          <div className="flex w-full @md:w-auto justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-chart-2"></span>
                <span className="text-sm">Income</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-chart-1"></span>
                <span className="text-sm">Outcome</span>
              </div>
            </div>

            <Select defaultValue="2020">
              <SelectTrigger className="h-8 w-20 px-2 border border-card-foreground bg-transparent text-card-foreground">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2440] text-foreground">
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 25, bottom: 5, left: 0 }}
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20, right: 20 }}
              tick={{ fill: "text-card-foreground", fontSize: 12 }}
              className="fill-card-foreground"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              ticks={[10000, 20000, 30000, 40000, 50000]}
              tick={{
                fill: "fill-card-foreground",
                fontSize: 12,
                textAnchor: "end",
              }}
              tickFormatter={amountFormatter}
              domain={[10000, "auto"]}
            />
            <Bar
              dataKey="outcome"
              fill="var(--color-outcome)"
              radius={[4, 4, 0, 0]}
              maxBarSize={5}
            />
            <Bar
              dataKey="income"
              fill="var(--color-income)"
              radius={[4, 4, 0, 0]}
              maxBarSize={5}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => {
                    return (
                      <div className="flex items-baseline gap-1 font-medium">
                        $
                        {Number(value).toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    );
                  }}
                  labelFormatter={(label) => {
                    return (
                      <div className="font-medium text-foreground">
                        {label} 2020
                      </div>
                    );
                  }}
                  className="rounded-md border-none bg-chart-3 p-3 text-foreground shadow-md"
                />
              }
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
