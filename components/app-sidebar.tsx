"use client";
import * as React from "react";
import { Settings } from "lucide-react";
import Logo2 from "../public/images/logo-2.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "./ui/logo";
import {
  AnalyticsIcon,
  DashboardIcon,
  HelpIcon,
  UserIcon,
  WalletIcon,
} from "@/app/dashboard/icons";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./ui/mode-toggle";
import UserProfileDropdown from "./user-profile-action";

// This is sample data.
// Menu items.
const mainNav = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Analytics",
    url: "#",
    icon: AnalyticsIcon,
  },
  {
    title: "My Wallet",
    url: "/dashboard/wallet",
    icon: WalletIcon,
  },
  {
    title: "Accounts",
    url: "#",
    icon: UserIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const secNav = [
  {
    title: "Help centre",
    url: "#",
    icon: HelpIcon,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar {...props} className="">
      <SidebarTrigger className="absolute top-13 -right-7 hidden md:flex border-2 border-l-0  rounded-sm rounded-l-none border-accent-foreground cursor-pointer" />

      <SidebarHeader>
        <Logo image={Logo2} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`h-9 gap-4 p-3 px-4 fill-foreground 
                      active:fill-sidebar-accent-foreground
                      data-[active=true]:fill-sidebar-accent-foreground
                      data-[state=open]:hover:fill-sidebar-accent-foreground
                      hover:fill-sidebar-accent-foreground
                      stroke-foreground 
                      active:stroke-sidebar-accent-foreground
                      data-[active=true]:stroke-sidebar-accent-foreground
                      data-[state=open]:hover:stroke-sidebar-accent-foreground
                      hover:stroke-sidebar-accent-foreground ${
                        pathname === item.url &&
                        "text-sidebar-accent-foreground bg-sidebar-accent fill-sidebar-accent-foreground stroke-sidebar-accent-foreground"
                      } `}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator
          orientation="horizontal"
          className="mt-6 mb-2 data-[orientation=horizontal]:w-full h-px bg-[#4B4B99]"
        />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {secNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={`h-9 gap-4 p-3 px-4 fill-foreground 
                      active:fill-sidebar-accent-foreground
                      data-[active=true]:fill-sidebar-accent-foreground
                      data-[state=open]:hover:fill-sidebar-accent-foreground
                      hover:fill-sidebar-accent-foreground
                      stroke-foreground 
                      active:stroke-sidebar-accent-foreground
                      data-[active=true]:stroke-sidebar-accent-foreground
                      data-[state=open]:hover:stroke-sidebar-accent-foreground
                      hover:stroke-sidebar-accent-foreground ${
                        pathname === item.url &&
                        "text-sidebar-accent-foreground bg-sidebar-accent fill-sidebar-accent-foreground stroke-sidebar-accent-foreground"
                      } `}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <ModeToggle />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarRail /> */}
      <SidebarFooter>
        <UserProfileDropdown />
      </SidebarFooter>
    </Sidebar>
  );
}
