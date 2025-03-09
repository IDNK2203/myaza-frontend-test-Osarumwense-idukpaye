"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ActivityChart() {
  const [timeframe, setTimeframe] = useState("Month");

  // Chart data
  const data = [
    { name: "Daily payment", value: 55, color: "bg-[#7B5CF5]" },
    { name: "Hobby", value: 20, color: "bg-[#5ECFEA]" },
  ];

  // Calculate total percentage
  const totalPercentage = data.reduce((acc, item) => acc + item.value, 0);

  // Calculate stroke dash values for the donut segments
  const calculateStrokeDash = (percentage: number) => {
    const circumference = 2 * Math.PI * 40; // 40 is the radius
    return (percentage / 100) * circumference;
  };

  // Calculate the stroke-dasharray and stroke-dashoffset for each segment
  let cumulativeOffset = 0;
  const segments = data.map((item) => {
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
    <Card className="w-full max-w-xs bg-[#1A1A3A] text-white border-none p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Activity</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="h-8 border-[#3A3A5A] bg-transparent text-white hover:bg-[#2A2A4A] hover:text-white"
            >
              {timeframe}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[#2A2A4A] border-[#3A3A5A] text-white"
          >
            <DropdownMenuItem
              onClick={() => setTimeframe("Day")}
              className="hover:bg-[#3A3A5A]"
            >
              Day
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTimeframe("Week")}
              className="hover:bg-[#3A3A5A]"
            >
              Week
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTimeframe("Month")}
              className="hover:bg-[#3A3A5A]"
            >
              Month
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setTimeframe("Year")}
              className="hover:bg-[#3A3A5A]"
            >
              Year
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex justify-center items-center my-6 relative">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="transparent"
            stroke="#2A2A4A"
            strokeWidth="12"
          />
          {segments.map((segment, index) => (
            <circle
              key={index}
              cx="60"
              cy="60"
              r="40"
              fill="transparent"
              stroke={segment.color.replace("bg-", "")}
              strokeWidth="12"
              strokeDasharray={`${segment.strokeDash} ${
                2 * Math.PI * 40 - segment.strokeDash
              }`}
              strokeDashoffset={-segment.strokeOffset}
              transform="rotate(-90 60 60)"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-2xl font-bold">{totalPercentage}%</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm font-medium">{item.value}%</span>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full mt-4 border-[#3A3A5A] bg-transparent text-white hover:bg-[#2A2A4A] hover:text-white"
      >
        See All Activity
      </Button>
    </Card>
  );
}
