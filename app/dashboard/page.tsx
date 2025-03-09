import MetricCards from "./metrics-cards";
import CreditCardWidget from "./credit-card-widget";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Heading } from "@/components/ui/heading-b";
import { SearchForm } from "@/components/search-form";
import { AnalyticsChart } from "./analytics-chart";
import ActivityChart from "./activity-chart";
import { TransactionTable } from "./transaction-table";

export default function Page() {
  return (
    <>
      <header className="flex flex-col @md:flex-row @md:h-16 shrink-0 items-start @md:items-center gap-4 @md:justify-between">
        <SidebarTrigger className="cursor-pointer absolute top-8 right-4 flex md:hidden border-2 rounded-sm  border-accent-foreground" />
        <Heading
          heading="Welcome Back, Ali 👋"
          rider="Here’s what’s happening with your store today."
        />
        <SearchForm className="w-full max-w-96" />
      </header>
      <WidgetsSection />
    </>
  );
}

const WidgetsSection = () => {
  return (
    <div className="py-4 w-full">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col @md:flex-row gap-4 w-full  ">
          <div className="w-full flex flex-[1.28] flex-col gap-4">
            <MetricCards />
            <AnalyticsChart />
          </div>
          <div className="w-full flex-col flex-1 flex">
            <CreditCardWidget />
          </div>
        </div>
        <div className="flex flex-col @md:flex-row gap-4 w-full ">
          <div className="w-full flex flex-[1.28] flex-col gap-4">
            <TransactionTable />
          </div>
          <div className="w-full flex-col flex-1 flex">
            <ActivityChart />
          </div>
        </div>
      </div>
    </div>
  );
};
