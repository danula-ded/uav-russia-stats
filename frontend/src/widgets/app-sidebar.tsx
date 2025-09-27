import { 
  BarChart3, 
  Upload, 
  FileText, 
  Settings, 
  LogOut
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/shared/ui/sidebar"
import { useAuth } from "@/processes/auth/auth-context"

interface NavigationItem {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  isActive?: boolean
}

const navigationItems: NavigationItem[] = [
  {
    title: "Дашборд",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Загрузка пакетов",
    url: "/upload",
    icon: Upload,
  },
  {
    title: "Журнал операций",
    url: "/logs",
    icon: FileText,
  },
  {
    title: "Интеграция",
    url: "/integration",
    icon: Settings,
  },
]

export function AppSidebar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">U</span>
          </div>
          <div>
            <h1 className="font-semibold text-sm">UAV Stats</h1>
            <p className="text-xs text-muted-foreground">Russia</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>
          <SidebarMenu>
            {navigationItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                >
                  <a href={item.url}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/user.jpg" alt="User" />
            <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user?.name || "Пользователь"}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.role || "Роль"}</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={handleLogout}
            title="Выйти"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}