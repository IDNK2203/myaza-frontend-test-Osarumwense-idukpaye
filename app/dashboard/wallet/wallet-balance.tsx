"use client";

import Image from "next/image";
import NGN_flag from "../../../public/images/ngn.png";
import GB_flag from "../../../public/images/gbp-logo.png";
import USA_flag from "../../../public/images/usa-logo.png";
import { Button } from "@/components/ui/button";

// components/WalletBalance.tsx
// import React } from 'react';
// import Image from 'next/image';

// Define types for our wallet data
type Currency = "NGN" | "GBP" | "USD";

interface Wallet {
  id: string;
  currency: Currency;
  balance: number;
  flag: string;
}

interface WalletBalanceProps {
  consolidatedBalance: number;
  wallets: Wallet[];
  //   onAddWallet: () => void;
  //   onMoreOptions: () => void;
}

// Helper function to format currency
const formatCurrency = (amount: number): string => {
  return amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

const WalletBalance: React.FC<WalletBalanceProps> = ({
  consolidatedBalance,
  wallets,
  //   onAddWallet,
  //   onMoreOptions,
}) => {
  const handleAddWallet = () => {
    console.log("Add new wallet");
    // Implementation would open a modal or navigate to add wallet page
  };

  const handleMoreOptions = () => {
    console.log("More options");
    // Implementation would show a dropdown or menu
  };

  return (
    <div className="bg-primary p-6 rounded-2xl">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-8 w-full">
        <div>
          <p className="text-gray-400 text-sm mb-1">
            Your consolidated balance
          </p>
          <h2 className="text-white text-3xl font-bold">
            ${formatCurrency(consolidatedBalance)}
          </h2>
        </div>
        <div className="flex items-center justify-between max-w-96 mr-6 ">
          <Button
            onClick={handleAddWallet}
            type="submit"
            className="w-full"
            variant={"default"}
            size={"xl"}
          >
            Add New Wallet
            <span className="pr-1">+</span>
          </Button>

          <Button
            onClick={handleMoreOptions}
            variant={"outline"}
            size={"icon"}
            className="rounded-full size-6 mx-2"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className=" border-1 border-[#8477FF] p-4 rounded-xl hover:border-[#8477FF]/80 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 relative">
                {wallet.currency === "NGN" && (
                  <div className="w-full flex justify-center max-w-28 items-center">
                    <Image alt="Brand Logo" src={NGN_flag} className="w-full" />{" "}
                  </div>
                )}
                {wallet.currency === "GBP" && (
                  <div className="w-full flex justify-center max-w-28 items-center">
                    <Image alt="Brand Logo" src={GB_flag} className="w-full" />{" "}
                  </div>
                )}
                {wallet.currency === "USD" && (
                  <div className="w-full flex justify-center max-w-28 items-center">
                    <Image alt="Brand Logo" src={USA_flag} className="w-full" />{" "}
                  </div>
                )}
              </div>
              <span className="text-white font-medium">
                {wallet.currency} Wallet
              </span>
            </div>
            <p className="text-gray-400 text-sm pl-11">
              Balance: {formatCurrency(wallet.balance)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletBalance;
