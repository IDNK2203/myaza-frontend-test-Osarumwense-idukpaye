import { SearchForm } from "@/components/search-form";
import { Heading } from "@/components/ui/heading-b";
import { SidebarTrigger } from "@/components/ui/sidebar";
import WalletsWrapper from "./wallet-balance-wrapper";
import { TransactionTable } from "../transaction-table";

export default function Page() {
  return (
    <>
      <header className="flex flex-col md:flex-row md:h-16 shrink-0 items-start md:items-center gap-4 md:justify-between">
        <SidebarTrigger className="cursor-pointer absolute top-8 right-4 flex md:hidden border-2 rounded-sm  border-accent-foreground" />
        <Heading
          heading="My wallets"
          rider="Manage all your wallets from here"
        />
        <SearchForm className="w-full max-w-96" />
      </header>
      <div className="w-full flex flex-col gap-4 py-6">
        <WalletsWrapper />
        <TransactionTable />
      </div>
    </>
  );
}
