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
import {
  BarChart3,
  TrendingUp,
  Activity,
  Target,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { createCustomTooltip } from "@/components/dashboard/custom-tooltip";

const trafficSources = [
  { name: "Organic Search", value: 45, color: "var(--chart-1)" },
  { name: "Direct", value: 25, color: "var(--chart-2)" },
  { name: "Social Media", value: 18, color: "var(--chart-3)" },
  { name: "Email", value: 12, color: "var(--chart-4)" },
];

const deviceData = [
  { device: "Desktop", users: 12500, percentage: 65 },
  { device: "Mobile", users: 5800, percentage: 30 },
  { device: "Tablet", users: 900, percentage: 5 },
];

const pageViewsData = [
  { page: "Home", views: 4520 },
  { page: "Products", views: 3200 },
  { page: "About", views: 2100 },
  { page: "Contact", views: 1800 },
  { page: "Blog", views: 1500 },
];

export default function AnalyticsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Analytics</h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">
                Deep insights and advanced analytics for your business
              </p>
            </div>
            
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Page Views
                  </CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">12,345</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +23% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Bounce Rate
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">42.3%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    -5.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Conversion
                  </CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">3.24%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +0.8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-md">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Avg. Session
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl sm:text-2xl font-bold">4m 32s</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    +12s from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="traffic" className="space-y-4">
              <TabsList>
                <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
                <TabsTrigger value="devices">Devices</TabsTrigger>
                <TabsTrigger value="pages">Top Pages</TabsTrigger>
              </TabsList>

              <TabsContent value="traffic" className="space-y-4">
                <Card className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle>Traffic Sources</CardTitle>
                    <CardDescription>
                      Distribution of traffic by source
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={trafficSources}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {trafficSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={createCustomTooltip((value: number) => `${value}%`)} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="devices" className="space-y-4">
                <Card className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle>Device Breakdown</CardTitle>
                    <CardDescription>
                      User distribution across devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {deviceData.map((device, index) => (
                        <div key={device.device} className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              {device.device === "Desktop" && <Monitor className="h-4 w-4 text-muted-foreground" />}
                              {device.device === "Mobile" && <Smartphone className="h-4 w-4 text-muted-foreground" />}
                              {device.device === "Tablet" && <Tablet className="h-4 w-4 text-muted-foreground" />}
                              <span className="font-medium">{device.device}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-muted-foreground">{device.users.toLocaleString()} users</span>
                              <span className="font-semibold">{device.percentage}%</span>
                            </div>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${device.percentage}%`,
                                backgroundColor: `var(--chart-${index + 1})`,
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="pages" className="space-y-4">
                <Card className="transition-all hover:shadow-md">
                  <CardHeader>
                    <CardTitle>Top Pages</CardTitle>
                    <CardDescription>
                      Most visited pages this month
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={pageViewsData} margin={{ top: 10, right: 15, left: 5, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--muted)" opacity={0.3} />
                        <XAxis
                          dataKey="page"
                          tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <Tooltip content={createCustomTooltip((value: number) => `${value.toLocaleString()} views`)} />
                        <Bar
                          dataKey="views"
                          fill="var(--chart-1)"
                          radius={[8, 8, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
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

