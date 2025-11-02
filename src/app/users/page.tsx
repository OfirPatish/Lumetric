"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";
import { UsersTable } from "@/components/dashboard/users-table";
import { recentUsers } from "@/lib/mock-data";

export default function UsersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeUsers = recentUsers.filter(u => u.status === "active").length;
  const totalUsers = recentUsers.length;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="hidden md:flex" />
      
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Main navigation menu for Lumetric dashboard
          </SheetDescription>
          <Sidebar onLinkClick={() => setMobileMenuOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-background via-muted/30 to-background p-3 sm:p-4 md:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Users</h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Manage and monitor your user base
              </p>
            </div>
            
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Users
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalUsers}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    All registered users
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Users
                  </CardTitle>
                  <UserCheck className="h-4 w-4" style={{ color: "var(--chart-4)" }} />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">{activeUsers}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Currently active
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    New Users
                  </CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    This month
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Inactive
                  </CardTitle>
                  <UserX className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">
                    {totalUsers - activeUsers}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Inactive accounts
                  </p>
                </CardContent>
              </Card>
            </div>

            <UsersTable data={recentUsers} />
          </div>
        </main>
      </div>
    </div>
  );
}

