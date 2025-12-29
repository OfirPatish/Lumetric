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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SalesChart } from "@/components/dashboard/sales-chart";
import { DollarSign, TrendingUp, CreditCard, Receipt, TrendingDown } from "lucide-react";
import { salesData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function RevenuePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalRevenue = salesData.reduce((sum, item) => sum + item.value, 0);
  const avgMonthly = totalRevenue / salesData.length;
  const latestRevenue = salesData[salesData.length - 1]?.value || 0;
  const previousMonthRevenue = salesData[salesData.length - 2]?.value || 0;
  const revenueChange = previousMonthRevenue > 0 
    ? ((latestRevenue - previousMonthRevenue) / previousMonthRevenue * 100).toFixed(1)
    : "0";
  const isPositiveChange = latestRevenue >= previousMonthRevenue;
  
  // Calculate quarterly breakdown
  const q1Revenue = salesData.slice(0, 3).reduce((sum, item) => sum + item.value, 0);
  const q2Revenue = salesData.slice(3, 6).reduce((sum, item) => sum + item.value, 0);
  const q3Revenue = salesData.slice(6, 9).reduce((sum, item) => sum + item.value, 0);
  const q4Revenue = salesData.slice(9, 12).reduce((sum, item) => sum + item.value, 0);
  
  const quarterlyData = [
    { quarter: "Q1", revenue: q1Revenue },
    { quarter: "Q2", revenue: q2Revenue },
    { quarter: "Q3", revenue: q3Revenue },
    { quarter: "Q4", revenue: q4Revenue },
  ];

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
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Revenue</h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Track and analyze your revenue performance
              </p>
            </div>
            
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Revenue
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">
                    ${(totalRevenue / 1000).toFixed(0)}k
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    All time
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    This Month
                  </CardTitle>
                  {isPositiveChange ? (
                    <TrendingUp className="h-4 w-4" style={{ color: "var(--chart-4)" }} />
                  ) : (
                    <TrendingDown className="h-4 w-4" style={{ color: "var(--destructive)" }} />
                  )}
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">
                    ${(latestRevenue / 1000).toFixed(0)}k
                  </div>
                  <p className={cn(
                    "text-xs mt-1 flex items-center gap-1",
                    isPositiveChange ? "text-[var(--chart-4)]" : "text-destructive"
                  )}>
                    {isPositiveChange ? "+" : ""}{revenueChange}% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Avg. Monthly
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">
                    ${(avgMonthly / 1000).toFixed(0)}k
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Average per month
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Transactions
                  </CardTitle>
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    This month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <SalesChart data={salesData} />
              </TabsContent>

              <TabsContent value="quarterly">
                <Card className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle>Quarterly Revenue Breakdown</CardTitle>
                    <CardDescription>
                      Revenue performance by quarter
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {quarterlyData.map((quarter, index) => {
                        const maxRevenue = Math.max(...quarterlyData.map(q => q.revenue));
                        const percentage = (quarter.revenue / maxRevenue) * 100;
                        return (
                          <div key={quarter.quarter} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="font-medium">{quarter.quarter} 2024</span>
                              <div className="flex items-center gap-3">
                                <span className="text-muted-foreground">
                                  ${(quarter.revenue / 1000).toFixed(0)}k
                                </span>
                                <span className="font-semibold">{percentage.toFixed(0)}%</span>
                              </div>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{
                                  width: `${percentage}%`,
                                  backgroundColor: `var(--chart-${index + 1})`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}

