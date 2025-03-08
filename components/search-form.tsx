import { Search } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-0 px-0 w-full">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search for anything...."
            className="pr-8 w-full max-w-96 border-none shadow-2xs bg-primary placeholder:text-accent-foreground text-accent-foreground"
          />
          <Search className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2  select-none text-foreground" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
