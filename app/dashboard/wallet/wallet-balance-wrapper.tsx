// pages/wallets.tsx or app/wallets/page.tsx
import React from "react";
import WalletBalance from "./wallet-balance";

const WalletsWrapper: React.FC = () => {
  // Sample data - in a real app, this would come from an API or state management
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
      //   onAddWallet={handleAddWallet}
      //   onMoreOptions={handleMoreOptions}
    />
  );
};

export default WalletsWrapper;
