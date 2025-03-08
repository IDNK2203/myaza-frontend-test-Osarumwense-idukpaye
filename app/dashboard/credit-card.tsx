import { Button } from "@/components/ui/button";
import React from "react";

interface CreditCardProps {
  cardHolder: string;
  balance: number;
  currentBalance: number;
  cardNumber: string;
  expiryDate: string;
  brand: "visa" | "mastercard";
}

const CreditCard: React.FC<CreditCardProps> = ({
  cardHolder,
  balance,
  currentBalance,
  cardNumber,
  expiryDate,
  brand,
}) => {
  return (
    <div className="bg-navy-900 rounded-3xl p-6 max-w-md mx-auto">
      <h2 className="text-white text-2xl font-bold mb-2">
        {cardHolder}`&apos;`s Card
      </h2>

      <div className="text-gray-400 text-sm mb-1">Card Balance</div>
      <div className="text-white text-2xl font-bold mb-6">
        ${balance.toFixed(2)}
      </div>

      {/* Credit Card */}
      <div className="relative bg-gradient-to-br from-purple-600 to-blue-500 rounded-2xl p-6 mb-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-full h-24 bg-white/10 rounded-full transform scale-x-150"></div>
          <div className="absolute top-2/4 left-0 w-full h-24 bg-white/10 rounded-full transform scale-x-150"></div>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-white/80 text-sm mb-1">Current Balance</div>
            <div className="text-white text-3xl font-bold">
              ${currentBalance.toFixed(2)}
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-6 relative">
              <div className="absolute w-6 h-6 bg-red-500 rounded-full right-0"></div>
              <div className="absolute w-6 h-6 bg-yellow-500 rounded-full left-0 opacity-80"></div>
            </div>
            <div className="text-white text-xs ml-1">{brand}</div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-white tracking-wider">{cardNumber}</div>
          <div className="text-white">{expiryDate}</div>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-8 h-1.5 bg-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button className="w-full" variant={"default"} size={"xl"}>
          Manage Cards
        </Button>
        <Button className="w-full" variant={"outline"} size={"xl"}>
          Transfer
        </Button>
      </div>
    </div>
  );
};

export default CreditCard;
