
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { ChartPieIcon } from 'lucide-react';

interface SpendingCategory {
  name: string;
  value: number;
  color: string;
  insight?: string;
}

const SpendingInsights = () => {
  const data: SpendingCategory[] = [
    { name: "Housing", value: 1200, color: "#9b87f5", insight: "Your housing costs are well within the recommended 30% of income." },
    { name: "Food", value: 650, color: "#7E69AB", insight: "Consider meal planning to reduce your food expenses by 10-15%." },
    { name: "Transportation", value: 400, color: "#6E59A5", insight: "You're spending less than average on transportation - great job!" },
    { name: "Utilities", value: 250, color: "#F97316", insight: "Your utility costs are typical for your area." },
    { name: "Entertainment", value: 300, color: "#0EA5E9", insight: "Look for free local events to enjoy while saving money." },
    { name: "Savings", value: 500, color: "#8B5CF6", insight: "You're saving 15% of your income - exceeding the recommended 10%!" },
    { name: "Other", value: 350, color: "#D946EF", insight: "Consider categorizing 'Other' expenses for better tracking." },
  ];

  const chartConfig = data.reduce((config, category) => {
    return {
      ...config,
      [category.name]: {
        label: category.name,
        theme: {
          light: category.color,
          dark: category.color,
        },
      },
    };
  }, {});

  const totalSpending = data.reduce((sum, category) => sum + category.value, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <ChartPieIcon className="mr-2 h-5 w-5 text-[#9b87f5]" />
          Monthly Spending Insights
        </CardTitle>
        <CardDescription>
          See where your money goes and get personalized insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-[300px] flex items-center justify-center">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                    nameKey="name"
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Spending Breakdown</h3>
            <div className="space-y-3">
              {data.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span>{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${category.value}</span>
                    <span className="text-xs text-muted-foreground">
                      {Math.round((category.value / totalSpending) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Helpful Insights</h3>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm">
                  You've reduced your dining out expenses by 18% this month. Great job sticking to your budget!
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpendingInsights;
