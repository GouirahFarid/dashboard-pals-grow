
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Clock, ChartBarIcon, Info } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AnalyticsDashboard = () => {
  // Sample data for charts
  const websiteData = [
    { name: 'Jan', visitors: 400 },
    { name: 'Feb', visitors: 600 },
    { name: 'Mar', visitors: 550 },
    { name: 'Apr', visitors: 700 },
    { name: 'May', visitors: 900 },
    { name: 'Jun', visitors: 800 },
  ];

  const salesData = [
    { name: 'Mon', inStore: 120, online: 80 },
    { name: 'Tue', inStore: 100, online: 60 },
    { name: 'Wed', inStore: 140, online: 90 },
    { name: 'Thu', inStore: 170, online: 120 },
    { name: 'Fri', inStore: 210, online: 150 },
    { name: 'Sat', inStore: 250, online: 170 },
    { name: 'Sun', inStore: 190, online: 130 },
  ];

  const chartConfig = {
    visitors: { color: "#0EA5E9" },
    inStore: { color: "#8B5CF6" },
    online: { color: "#10B981" },
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Business Analytics</h3>
          <p className="text-muted-foreground">Simplified insights to help you make better business decisions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            Last 30 Days
          </Button>
          <Button>
            Export Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-sm">Website Visitors</p>
                <h4 className="text-2xl font-bold">4,827</h4>
              </div>
              <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+12%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">vs last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-sm">Online Orders</p>
                <h4 className="text-2xl font-bold">246</h4>
              </div>
              <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+8%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">vs last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-sm">Customer Retention</p>
                <h4 className="text-2xl font-bold">64%</h4>
              </div>
              <div className="flex items-center bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                <TrendingDown className="h-3 w-3 mr-1" />
                <span>-3%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">vs last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-muted-foreground text-sm">Avg. Response Time</p>
                <h4 className="text-2xl font-bold">2.4 hrs</h4>
              </div>
              <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>+15%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">vs last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-500 mr-2" />
                Website Traffic
              </div>
              <Badge variant="outline">Last 6 Months</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={websiteData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#0EA5E9" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex items-center justify-between mt-4 text-sm">
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">Tip: Consider email marketing to increase traffic</span>
              </div>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <ChartBarIcon className="h-5 w-5 text-purple-500 mr-2" />
                Sales Comparison
              </div>
              <Badge variant="outline">Last Week</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={salesData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="inStore" name="In-store" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="online" name="Online" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="flex items-center justify-between mt-4 text-sm">
              <div className="flex items-center">
                <Info className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className="text-muted-foreground">Online sales are growing steadily</span>
              </div>
              <Button variant="ghost" size="sm">View Details</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button variant="outline" className="w-full mt-4">
        View All Analytics
      </Button>
    </div>
  );
};

export default AnalyticsDashboard;
