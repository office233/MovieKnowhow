import { AppSidebar } from "@/components/layout/app-sidebar";
import { WorkflowStudio } from "@/components/workflow/workflow-studio";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset className="min-w-0 bg-[#ebeae6]">
        <WorkflowStudio />
      </SidebarInset>
    </SidebarProvider>
  );
}

