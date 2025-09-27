import { Outlet } from "react-router-dom"
import { AppSidebar } from "@/widgets/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/shared/ui/sidebar"

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
