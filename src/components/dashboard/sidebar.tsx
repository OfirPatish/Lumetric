"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Users", href: "/users", icon: Users },
  { name: "Revenue", href: "/revenue", icon: TrendingUp },
];

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Sidebar({ className, onLinkClick }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn("flex h-screen w-64 flex-col border-r border-border/50 bg-card/50 backdrop-blur-sm", className)}>
      <div className="flex h-16 items-center border-b border-border/50 px-4 sm:px-6 bg-gradient-to-r from-primary/8 via-primary/4 to-transparent">
        <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent tracking-tight">
          Lumetric
        </h1>
      </div>
      <nav className="flex-1 space-y-1.5 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} onClick={onLinkClick}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start transition-all duration-200",
                  isActive && "bg-primary/10 text-primary font-semibold shadow-sm hover:bg-primary/15 border border-primary/20"
                )}
              >
                <Icon className={cn("mr-2 h-4 w-4 transition-transform duration-200", isActive && "scale-110")} />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border/50 p-4 space-y-1">
        <Button 
          variant="ghost" 
          className="w-full justify-start" 
          onClick={onLinkClick}
          aria-label="Settings"
        >
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-muted-foreground hover:text-foreground" 
          onClick={onLinkClick}
          aria-label="Logout"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}

