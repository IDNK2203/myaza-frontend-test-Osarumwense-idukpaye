"use client";
import Image, { StaticImageData } from "next/image";
import mastercardLogo from "../../public/images/mastercard_logo.png";

interface CreditCardProps {
  balance: string;
  cardNumber: string;
  expiryDate: string;
  brandLogo?: StaticImageData; // Use string if using external URLs, or StaticImageData for imported images
}

const CreditCard = ({
  balance,
  cardNumber,
  expiryDate,
  brandLogo = mastercardLogo,
}: CreditCardProps) => {
  return (
    <div className="grow overflow-hidden relative shadow flex flex-col justify-between h-[200px] bg-gradient-to-br from-[#9C2CF3] to-[#3A6FF9] rounded-2xl p-4 sm:p-8 mb-6">
      {/* Background wave pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-3/5 -left-14 h-56 w-60 bg-black/50 rounded-full transform scale-x-150"></div>
        <div className="absolute -top-3/5 -right-20 h-56 w-60 bg-black/50 rounded-full transform scale-x-150"></div>
      </div>

      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="text-white/80 text-sm mb-1">Current Balance</div>
          <div className="text-white text-3xl font-medium">{balance}</div>
        </div>
        <div>
          <div className="w-full flex justify-center max-w-28 items-center">
            <Image alt="Brand Logo" src={brandLogo} className="w-full" />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-white tracking-wider">{cardNumber}</div>
        <div className="text-white">{expiryDate}</div>
      </div>
    </div>
  );
};

export default CreditCard;
