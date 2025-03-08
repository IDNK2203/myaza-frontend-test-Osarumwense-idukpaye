import MetricCards from "./metrics-cards";
import CreditCardWidget from "./credit-card-widget";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Heading } from "@/components/ui/heading-b";
import { SearchForm } from "@/components/search-form";

export default function Page() {
  return (
    <>
      <header className="flex flex-col md:flex-row md:h-16 shrink-0 items-start md:items-center gap-4 md:justify-between">
        <SidebarTrigger className="cursor-pointer absolute top-8 right-4 flex md:hidden border-2 rounded-sm  border-accent-foreground" />
        <Heading
          heading="Welcome Back, Ali 👋"
          rider="Here’s what’s happening with your store today."
        />
        <SearchForm className="w-full max-w-96" />
      </header>
      <div className="py-4 w-full">
        <div className="grid gap-4  md:grid-cols-[1.28fr_1fr] w-full">
          <div className="p-2 w-full h-[465px]">
            <MetricCards />
          </div>
          <div className="p-2 w-full h-[465px]">
            <CreditCardWidget />
          </div>
          <div className="p-2 w-full h-[362px]"></div>
          <div className="p-2 w-full h-[362px]"></div>
        </div>
      </div>
    </>
  );
}
