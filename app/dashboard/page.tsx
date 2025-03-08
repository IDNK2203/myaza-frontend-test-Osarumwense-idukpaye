import { AppSidebar } from "@/components/app-sidebar";
import { SearchForm } from "@/components/search-form";
import { Heading } from "@/components/ui/heading-b";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-4 md:p-12 py-8 relative">
        <header className="flex flex-col md:flex-row md:h-16 shrink-0 items-start md:items-center gap-4 md:justify-between">
          <SidebarTrigger className="cursor-pointer absolute top-8 right-4 flex md:hidden border-2 rounded-sm  border-accent-foreground" />
          <Heading
            heading="Welcome Back, Ali 👋"
            rider="Here’s what’s happening with your store today."
          />
          <SearchForm className="w-full max-w-96" />
        </header>
        <div className="flex flex-1 flex-col gap-4 py-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
