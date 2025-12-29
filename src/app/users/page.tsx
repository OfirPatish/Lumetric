"use client";

import { useState, useMemo } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Users, UserPlus, UserCheck, UserX, Search, X } from "lucide-react";
import { UsersTable } from "@/components/dashboard/users-table";
import { recentUsers } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function UsersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive" | "pending">("all");
  
  const filteredUsers = useMemo(() => {
    return recentUsers.filter((user) => {
      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === "all" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const activeUsers = recentUsers.filter(u => u.status === "active").length;
  const totalUsers = recentUsers.length;
  const newUsersThisMonth = recentUsers.filter(u => {
    const signupDate = new Date(u.signupDate);
    const now = new Date();
    return signupDate.getMonth() === now.getMonth() && signupDate.getFullYear() === now.getFullYear();
  }).length;

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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Users</h1>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                  Manage and monitor your user base
                </p>
              </div>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-9"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
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
                  <div className="text-xl sm:text-2xl font-bold">{newUsersThisMonth}</div>
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

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <Tabs value={statusFilter} onValueChange={(v) => setStatusFilter(v as typeof statusFilter)}>
                <TabsList>
                  <TabsTrigger value="all">All ({recentUsers.length})</TabsTrigger>
                  <TabsTrigger value="active">Active ({recentUsers.filter(u => u.status === "active").length})</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive ({recentUsers.filter(u => u.status === "inactive").length})</TabsTrigger>
                  <TabsTrigger value="pending">Pending ({recentUsers.filter(u => u.status === "pending").length})</TabsTrigger>
                </TabsList>
              </Tabs>
              {searchQuery && (
                <Badge variant="secondary" className="text-xs">
                  {filteredUsers.length} result{filteredUsers.length !== 1 ? "s" : ""} found
                </Badge>
              )}
            </div>

            <UsersTable data={filteredUsers} />
          </div>
        </main>
      </div>
    </div>
  );
}

