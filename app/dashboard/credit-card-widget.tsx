// components/CreditCard.jsx
"use client";
import React, { useState } from "react";
// import Image from "next/image";
// import mastercardLogo from "../../public/images/mastercard_logo.png";
import { Button } from "@/components/ui/button";
import CreditCard from "./credit-card";

const CreditCardWidget = () => {
  const creditCardsData = [
    {
      cardHolder: "John Doe",
      balance: 1000.0,
      currentBalance: 500.0,
      cardNumber: "1234 5678 9876 5432",
      expiryDate: "12/25",
      brand: "visa",
    },
    {
      cardHolder: "Jane Smith",
      balance: 2000.0,
      currentBalance: 1500.0,
      cardNumber: "2345 6789 8765 4321",
      expiryDate: "11/24",
      brand: "mastercard",
    },
    {
      cardHolder: "Alice Johnson",
      balance: 5000.0,
      currentBalance: 4500.0,
      cardNumber: "3456 7890 9876 3210",
      expiryDate: "10/23",
      brand: "visa",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" flex flex-col bg-primary rounded-2xl @md:p-6 p-4 shadow mx-auto grow w-full">
      <div>
        <h2 className="text-white text-lg @md:text-2xl font-bold mb-2">
          My Card
        </h2>

        <div className="text-card-foreground  mb-1">Card Balance</div>
        <div className="text-white text-lg @md:text-2xl font-bold mb-6">
          $15,595,015
        </div>
      </div>

      <CreditCard
        balance="$5,750.20"
        cardNumber="5282 3456 7890 1289"
        expiryDate="09/25"
      />

      {/* Card Selector Indicator */}
      <div className="flex justify-center mb-6">
        {creditCardsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`size-2 mx-1 rounded-full transition-colors cursor-pointer ${
              currentSlide === index
                ? "bg-primary-foreground w-4"
                : "bg-[#27264E]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Action Buttons */}
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

export default CreditCardWidget;
