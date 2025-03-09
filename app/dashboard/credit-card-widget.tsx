// components/CreditCard.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import mastercardLogo from "../../public/images/mastercard_logo.png";
import { Button } from "@/components/ui/button";

const CreditCard = () => {
  const cards = [
    {
      id: 1,
      quote:
        "I've been using Uifry for over a year, and it's helped simplify all my payments.",
      author: "Ali Riaz",
      location: "Singapore",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "This platform transformed how I manage my finances. Couldn't be happier!",
      author: "Sarah Johnson",
      location: "New York",
      rating: 5,
    },
    {
      id: 3,
      quote: "The best financial app I've ever used. Intuitive and reliable.",
      author: "Miguel Santos",
      location: "Barcelona",
      rating: 5,
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
          $15,595.015
        </div>
      </div>

      {/* Credit Card */}
      <div className="grow overflow-hidden relative shadow flex flex-col justify-between h-[200px] bg-gradient-to-br from-[#9C2CF3] to-[#3A6FF9] rounded-2xl p-4 sm:p-8 mb-6">
        {/* Background wave pattern - simplified for this example */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-3/5 -left-14 h-56 w-60 bg-black/50 rounded-full transform scale-x-150"></div>
          <div className="absolute -top-3/5 -right-20 h-56 w-60 bg-black/50 rounded-full transform scale-x-150"></div>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <div className="text-white/80 text-sm mb-1">Current Balance</div>
            <div className="text-white text-3xl font-medium">$5,750.20</div>
          </div>
          <div>
            <div className="w-full flex justify-center max-w-28 items-center">
              <Image alt="Brand Logo" src={mastercardLogo} className="w-full" />{" "}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-white tracking-wider">5282 3456 7890 1289</div>
          <div className="text-white">09/25</div>
        </div>
      </div>

      {/* Card Selector Indicator */}
      <div className="flex justify-center mb-6">
        {cards.map((_, index) => (
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

export default CreditCard;
