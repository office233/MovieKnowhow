"use client";

import { Aperture, Boxes, CircleHelp, Clapperboard, FolderOpen, Settings2, Sparkles } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HiggsfieldAccountCard } from "@/components/layout/higgsfield-account-card";

const navigation = [
  { label: "Create", icon: Sparkles, active: true },
  { label: "My runs", icon: Clapperboard },
  { label: "Assets", icon: FolderOpen },
  { label: "Templates", icon: Boxes },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 p-3 pr-0" variant="floating">
      <SidebarHeader className="px-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-[15px] bg-[#24232a] text-[#ff775f] shadow-lg"><Aperture className="size-5" /></div>
          <div><p className="text-[15px] font-extrabold tracking-[-0.04em]">UGC GENIE</p><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Creative studio</p></div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 pt-7">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-[0.16em]">Studio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {navigation.map(({ label, icon: Icon, active }) => (
                <SidebarMenuItem key={label}>
                  <SidebarMenuButton isActive={active} className="h-11 rounded-2xl px-3 font-bold data-[active=true]:bg-[#24232a] data-[active=true]:text-white data-[active=true]:shadow-lg">
                    <Icon className={active ? "text-[#ff775f]" : ""} />{label}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem><SidebarMenuButton className="h-10 rounded-xl"><CircleHelp />Guide</SidebarMenuButton></SidebarMenuItem>
          <SidebarMenuItem><SidebarMenuButton className="h-10 rounded-xl"><Settings2 />Settings</SidebarMenuButton></SidebarMenuItem>
        </SidebarMenu>
        <HiggsfieldAccountCard />
      </SidebarFooter>
    </Sidebar>
  );
}
