// Mock data for Lumetric dashboard

export interface MetricCard {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  icon: string;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface TableRow {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
  revenue: number;
  signupDate: string;
}

export const metricCards: MetricCard[] = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: 20.1,
    trend: "up",
    icon: "dollar-sign",
  },
  {
    title: "Active Users",
    value: "2,350",
    change: 12.5,
    trend: "up",
    icon: "users",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: 2.4,
    trend: "up",
    icon: "trending-up",
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: -1.2,
    trend: "down",
    icon: "clock",
  },
];

export const salesData: ChartDataPoint[] = [
  { date: "Jan", value: 12000 },
  { date: "Feb", value: 19000 },
  { date: "Mar", value: 15000 },
  { date: "Apr", value: 25000 },
  { date: "May", value: 22000 },
  { date: "Jun", value: 30000 },
  { date: "Jul", value: 35000 },
  { date: "Aug", value: 32000 },
  { date: "Sep", value: 38000 },
  { date: "Oct", value: 42000 },
  { date: "Nov", value: 45000 },
  { date: "Dec", value: 48000 },
];

export const usersData: ChartDataPoint[] = [
  { date: "Mon", value: 400 },
  { date: "Tue", value: 600 },
  { date: "Wed", value: 500 },
  { date: "Thu", value: 700 },
  { date: "Fri", value: 650 },
  { date: "Sat", value: 550 },
  { date: "Sun", value: 450 },
];

export const engagementData: ChartDataPoint[] = [
  { date: "Week 1", value: 65, label: "Email Opens" },
  { date: "Week 2", value: 72, label: "Email Opens" },
  { date: "Week 3", value: 68, label: "Email Opens" },
  { date: "Week 4", value: 80, label: "Email Opens" },
];

export const recentUsers: TableRow[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    status: "active",
    revenue: 1240,
    signupDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael@example.com",
    status: "active",
    revenue: 2890,
    signupDate: "2024-01-20",
  },
  {
    id: "3",
    name: "Emily Davis",
    email: "emily@example.com",
    status: "pending",
    revenue: 0,
    signupDate: "2024-02-01",
  },
  {
    id: "4",
    name: "David Wilson",
    email: "david@example.com",
    status: "active",
    revenue: 5670,
    signupDate: "2024-01-10",
  },
  {
    id: "5",
    name: "Lisa Anderson",
    email: "lisa@example.com",
    status: "inactive",
    revenue: 890,
    signupDate: "2023-12-05",
  },
  {
    id: "6",
    name: "James Taylor",
    email: "james@example.com",
    status: "active",
    revenue: 3450,
    signupDate: "2024-01-25",
  },
  {
    id: "7",
    name: "Emma Brown",
    email: "emma@example.com",
    status: "active",
    revenue: 2100,
    signupDate: "2024-02-05",
  },
  {
    id: "8",
    name: "Robert Martinez",
    email: "robert@example.com",
    status: "active",
    revenue: 4320,
    signupDate: "2024-01-18",
  },
];

