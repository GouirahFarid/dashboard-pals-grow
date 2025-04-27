
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { TrendingUp } from 'lucide-react';

const data = [
  { month: "Jan", score: 64 },
  { month: "Feb", score: 63 },
  { month: "Mar", score: 67 },
  { month: "Apr", score: 70 },
  { month: "May", score: 73 },
  { month: "Jun", score: 77 },
  { month: "Jul", score: 82 },
];

const chartConfig = {
  financial: {
    label: "Financial Health Score",
    theme: {
      light: "#9b87f5",
      dark: "#9b87f5",
    },
  },
};

const FinancialHealthCard = () => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-[#9b87f5]/10 to-[#FDE1D3]/10 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center">
                <h3 className="text-2xl font-bold">Financial Health Score</h3>
                <span className="ml-2 flex items-center text-green-500 bg-green-100 px-2 py-1 rounded text-sm font-medium">
                  <TrendingUp className="h-3.5 w-3.5 mr-1" />
                  +12%
                </span>
              </div>
              <p className="text-muted-foreground">
                Your score has improved 12 points in the last 3 months!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-[#9b87f5] mr-1.5"></div>
                <span className="text-sm text-muted-foreground">Current: 82/100</span>
              </div>
              <div className="flex items-center">
                <div className="h-3 w-3 rounded-full bg-green-400 mr-1.5"></div>
                <span className="text-sm text-muted-foreground">Target: 90/100</span>
              </div>
            </div>
          </div>

          <div className="h-[200px] mt-6">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                >
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    tickMargin={10}
                  />
                  <YAxis 
                    domain={[50, 100]}
                    axisLine={false}
                    tickLine={false}
                    tickCount={5}
                    tickMargin={10}
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                  />
                  <Area
                    type="monotone"
                    dataKey="score"
                    name="financial"
                    stroke="#9b87f5"
                    fill="url(#colorScore)"
                    strokeWidth={2}
                  />
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialHealthCard;
