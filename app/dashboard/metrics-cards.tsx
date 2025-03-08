import { MoveDownRight, MoveUpRight } from "lucide-react";
import React from "react";

interface MetricCardProps {
  title: string;
  amount: number;
  percentage: number;
  isPositive: boolean;
  icon: React.ReactNode;
  bgColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  amount,
  percentage,
  isPositive,
  icon,
  bgColor,
}) => {
  return (
    <div className="bg-primary rounded-2xl p-4 shadow">
      <div className="flex items-end justify-between">
        <div className="flex items-center justify-start">
          <div className={`p-1.5 rounded-lg ${bgColor} mr-3`}>{icon}</div>
          <div className="flex flex-col gap-1">
            <p className="text-card-foreground text-sm">{title}</p>
            <h3 className=" text-2xl font-bold">${amount.toLocaleString()}</h3>
          </div>
        </div>

        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            isPositive
              ? "bg-green-500/20 text-green-500"
              : "bg-red-500/20 text-red-500"
          }`}
        >
          {isPositive ? "+" : "-"}
          {Math.abs(percentage)}%
        </div>
      </div>
    </div>
  );
};

const MetricCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <MetricCard
        title="Total Income"
        amount={632000}
        percentage={1.29}
        isPositive={true}
        bgColor="bg-[#64CFF6]"
        icon={<MoveDownRight />}
      />

      <MetricCard
        title="Total Outcome"
        amount={632000}
        percentage={1.29}
        isPositive={false}
        bgColor="bg-[#6359E9]"
        icon={<MoveUpRight />}
      />
    </div>
  );
};

export default MetricCards;
