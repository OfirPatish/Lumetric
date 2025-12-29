"use client";

import { useState } from "react";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { UsersChart } from "@/components/dashboard/users-chart";
import { EngagementChart } from "@/components/dashboard/engagement-chart";
import { UsersTable } from "@/components/dashboard/users-table";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  metricCards,
  salesData,
  usersData,
  engagementData,
  recentUsers,
} from "@/lib/mock-data";

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timePeriod, setTimePeriod] = useState("month");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex" />

      {/* Mobile Menu Sheet */}
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
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                  Welcome back, here&apos;s what&apos;s happening with your
                  business today.
                </p>
              </div>
              <Tabs value={timePeriod} onValueChange={setTimePeriod}>
                <TabsList>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Metric Cards */}
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {metricCards.map((metric, index) => (
                <MetricCard key={index} metric={metric} />
              ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
              <SalesChart data={salesData} />
              <UsersChart data={usersData} />
            </div>

            {/* Charts Row 2 */}
            <div className="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
              <EngagementChart data={engagementData} />
              <UsersTable data={recentUsers} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
