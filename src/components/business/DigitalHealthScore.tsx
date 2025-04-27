
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChartPieIcon, 
  Globe, 
  CreditCard, 
  Users, 
  ShoppingBag, 
  TrendingUp 
} from "lucide-react";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const DigitalHealthScore = () => {
  const data = [
    {
      name: "Online Presence",
      value: 65,
      fill: "#0EA5E9",
    },
    {
      name: "Digital Operations",
      value: 48,
      fill: "#8B5CF6",
    },
    {
      name: "Customer Experience",
      value: 72,
      fill: "#10B981",
    },
    {
      name: "Marketing",
      value: 35,
      fill: "#F97316",
    },
    {
      name: "Data Utilization",
      value: 28,
      fill: "#D946EF",
    },
  ];

  const chartConfig = {
    "Online Presence": { color: "#0EA5E9", icon: Globe },
    "Digital Operations": { color: "#8B5CF6", icon: CreditCard },
    "Customer Experience": { color: "#10B981", icon: Users },
    "Marketing": { color: "#F97316", icon: ShoppingBag },
    "Data Utilization": { color: "#D946EF", icon: TrendingUp },
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <ChartPieIcon className="h-5 w-5 text-blue-500" />
              Digital Health Score
            </h3>
            <div className="mt-4 text-center">
              <div className="text-5xl font-bold text-blue-600">52</div>
              <div className="text-sm text-muted-foreground">out of 100</div>
              <p className="mt-4 text-sm">
                Your business is making good progress in its digital journey! 
                Focus on improving your marketing strategies and data utilization 
                for the biggest impact.
              </p>
            </div>
          </div>

          <div className="flex-1 h-64">
            <ChartContainer config={chartConfig}>
              <RadialBarChart 
                innerRadius="30%" 
                outerRadius="100%" 
                data={data} 
                startAngle={180}
                endAngle={-180}
                barSize={12}
              >
                <RadialBar 
                  background
                  dataKey="value" 
                  cornerRadius={10}
                  label={{ position: 'insideStart', fill: '#FFFFFF', fontWeight: 'bold' }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </RadialBarChart>
              <ChartLegend content={<ChartLegendContent />} />
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DigitalHealthScore;
