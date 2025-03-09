import React from "react";
import WalletBalance from "./wallet-balance";

const WalletsWrapper: React.FC = () => {
  const walletData = {
    consolidatedBalance: 34780267.08,
    wallets: [
      {
        id: "1",
        currency: "NGN" as const,
        balance: 245890.88,
        flag: "ng",
      },
      {
        id: "2",
        currency: "GBP" as const,
        balance: 245890.88,
        flag: "gb",
      },
      {
        id: "3",
        currency: "USD" as const,
        balance: 245890.88,
        flag: "us",
      },
    ],
  };

  return (
    <WalletBalance
      consolidatedBalance={walletData.consolidatedBalance}
      wallets={walletData.wallets}
    />
  );
};

export default WalletsWrapper;
