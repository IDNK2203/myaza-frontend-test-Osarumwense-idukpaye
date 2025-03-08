import type { Metadata } from "next";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Uifry | Dashboard",
  description: "The ultimate tool for you shope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-4 md:p-12 py-8 relative">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
