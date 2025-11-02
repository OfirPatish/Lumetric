"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TableRow as TableRowType } from "@/lib/mock-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download } from "lucide-react";
import { exportToCSV } from "@/lib/export-utils";

interface UsersTableProps {
  data: TableRowType[];
}

const statusColors = {
  active: "bg-[var(--chart-4)]/10 text-[var(--chart-4)]",
  inactive: "bg-muted-foreground/10 text-muted-foreground",
  pending: "bg-[var(--chart-5)]/10 text-[var(--chart-5)]",
};

export function UsersTable({ data }: UsersTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleExport = () => {
    const exportData = data.map((user) => ({
      name: user.name,
      email: user.email,
      status: user.status.charAt(0).toUpperCase() + user.status.slice(1),
      revenue: `$${user.revenue.toLocaleString()}`,
      signupDate: formatDate(user.signupDate),
    }));

    exportToCSV(exportData, "users-export", {
      name: "Name",
      email: "Email",
      status: "Status",
      revenue: "Revenue",
      signupDate: "Signup Date",
    });
  };

  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-base sm:text-lg">Recent Users</CardTitle>
          <CardDescription className="text-xs sm:text-sm">
            A list of recently registered users
          </CardDescription>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExport}
                className="h-8 gap-2"
              >
                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download as CSV</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <div className="overflow-x-auto">
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[120px]">Name</TableHead>
                  <TableHead className="min-w-[180px]">Email</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="text-right min-w-[100px]">Revenue</TableHead>
                  <TableHead className="min-w-[120px]">Signup Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((user) => (
                  <TableRow key={user.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {user.email}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={statusColors[user.status]}
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium text-sm">
                      {formatCurrency(user.revenue)}
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {formatDate(user.signupDate)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}

