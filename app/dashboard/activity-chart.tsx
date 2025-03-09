"use client";

// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
  mid: {
    label: "mid",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

export default function ActivityChart() {
  const chartData = [
    { name: "Daily payment", value: 55, color: "bg-[#7B5CF5]" },
    { name: "Hobby", value: 20, color: "bg-[#5ECFEA]" },
  ];
  const data = [
    { month: "january", "Daily Payment": 55, Hobby: 20, Others: 25 },
  ];

  // Calculate total percentage
  const totalPercentage = chartData.reduce((acc, item) => acc + item.value, 0);

  // Calculate stroke dash values for the donut segments
  const calculateStrokeDash = (percentage: number) => {
    const circumference = 2 * Math.PI * 40; // 40 is the radius
    return (percentage / 100) * circumference;
  };

  // Calculate the stroke-dasharray and stroke-dashoffset for each segment
  let cumulativeOffset = 0;
  const segments = chartData.map((item) => {
    const strokeDash = calculateStrokeDash(item.value);
    const segment = {
      ...item,
      strokeDash,
      strokeOffset: cumulativeOffset,
    };
    cumulativeOffset += strokeDash;
    return segment;
  });

  return (
    <Card className="w-full rounded-lg bg-primary @md:p-6 p-4 border-none text-foreground justify-between grow">
      <CardHeader className="px-0">
        <div className="mb-6 flex w-full items-center justify-between">
          <h2 className="text-lg @md:text-2xl font-semibold">Activity</h2>
          <Select defaultValue="month">
            <SelectTrigger className="h-8 w-24 px-2 border border-card-foreground bg-transparent text-card-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#2a2440] text-foreground">
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between grow">
        <ChartContainer
          config={chartConfig}
          className="grow min-h-44 md:min-h-auto"
        >
          <RadialBarChart
            data={data}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
            reverseStackOrder
          >
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px] bg-chart-3 p-2"
                  cursor
                />
              }
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalPercentage}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              order={2}
              dataKey="Daily Payment"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              order={3}
              dataKey="Hobby"
              fill="var(--color-mobile)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              order={1}
              dataKey="Others"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-mid)"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>

        <div className="flex justify-between items-center -mt-20">
          {chartData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                <span className="text-sm">{item.name}</span>
              </div>
              <span className="text-sm font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
        <div className="my-2">
          <Button className="w-full" variant={"outline"} size={"xl"}>
            See All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
