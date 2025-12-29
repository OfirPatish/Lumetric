"use client";

import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border/50 bg-card/80 backdrop-blur-sm px-4 md:px-6 sticky top-0 z-10">
      <div className="flex flex-1 items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-accent"
          onClick={onMenuClick}
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" aria-hidden="true" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 w-full text-xs sm:text-sm border-border/60 focus:border-ring focus:ring-ring/20 transition-all"
            aria-label="Search dashboard"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <ThemeToggle />
        <Button 
          variant="ghost" 
          size="icon" 
          className="hidden sm:flex hover:bg-accent relative" 
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full border-2 border-card" aria-hidden="true" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-9 w-9 md:h-10 md:w-10 rounded-full hover:ring-2 hover:ring-ring/20 transition-all"
            >
              <Avatar className="h-9 w-9 md:h-10 md:w-10 ring-2 ring-border/50">
                <AvatarImage src="/avatar.png" alt="Ofir Patish" />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">OP</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-semibold leading-none">Ofir Patish</p>
                <p className="text-xs leading-none text-muted-foreground">
                  ofirpatish@lumetric.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer" onSelect={(e) => e.preventDefault()}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onSelect={(e) => e.preventDefault()}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="cursor-pointer text-destructive focus:text-destructive" 
              onSelect={(e) => e.preventDefault()}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
