
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  ClipboardList, 
  Heart, 
  LayoutDashboard, 
  Settings, 
  Users 
} from "lucide-react";

interface SidebarProps {
  open: boolean;
}

interface SidebarLinkProps {
  href: string;
  icon: React.ElementType;
  title: string;
  active?: boolean;
}

function SidebarLink({ 
  href, 
  icon: Icon, 
  title, 
  active = false 
}: SidebarLinkProps) {
  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-primary/10",
        active ? "bg-primary/10 text-primary" : "text-muted-foreground"
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </Link>
  );
}

export function Sidebar({ open }: SidebarProps) {
  const location = useLocation();
  
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r bg-sidebar pt-16 transition-transform duration-300 lg:static lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <div className="mb-4 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Main
        </div>
        
        <div className="space-y-1">
          <SidebarLink
            href="/"
            icon={LayoutDashboard}
            title="Dashboard"
            active={location.pathname === "/"}
          />
          <SidebarLink
            href="/reports"
            icon={ClipboardList}
            title="Reports"
            active={location.pathname === "/reports"}
          />
          <SidebarLink
            href="/medical"
            icon={Heart}
            title="Medical"
            active={location.pathname === "/medical"}
          />
        </div>
        
        <div className="mt-8 mb-4 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Analysis
        </div>
        
        <div className="space-y-1">
          <SidebarLink
            href="/stats"
            icon={BarChart3}
            title="Statistics"
            active={location.pathname === "/stats"}
          />
          <SidebarLink
            href="/players"
            icon={Users}
            title="Players"
            active={location.pathname === "/players"}
          />
        </div>
      </div>
      
      <div className="border-t p-4">
        <SidebarLink href="/settings" icon={Settings} title="Settings" />
      </div>
    </aside>
  );
}
