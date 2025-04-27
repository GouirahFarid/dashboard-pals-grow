
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { useForm } from "react-hook-form";
import { Trophy } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface ScenarioForm {
  savingsRate: number;
  initialInvestment: number;
  monthlyContribution: number;
  years: number;
  interestRate: number;
}

const ScenarioPlanner = () => {
  const [projectionData, setProjectionData] = useState<any[]>([]);
  const [currentTotal, setCurrentTotal] = useState<number>(0);
  
  const form = useForm<ScenarioForm>({
    defaultValues: {
      savingsRate: 15,
      initialInvestment: 5000,
      monthlyContribution: 300,
      years: 10,
      interestRate: 7,
    }
  });

  const chartConfig = {
    principal: {
      label: "Principal",
      theme: {
        light: "#9b87f5",
        dark: "#9b87f5",
      },
    },
    interest: {
      label: "Interest",
      theme: {
        light: "#7E69AB",
        dark: "#7E69AB",
      },
    },
  };

  const calculateProjection = (values: ScenarioForm) => {
    const { initialInvestment, monthlyContribution, years, interestRate } = values;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = years * 12;
    const data = [];
    
    let principal = initialInvestment;
    let balance = initialInvestment;
    
    for (let month = 0; month <= totalMonths; month += 12) {
      let yearBalance = balance;
      let yearPrincipal = principal;
      
      // Calculate next year's values
      for (let i = 0; i < 12 && month + i <= totalMonths; i++) {
        balance = (balance + monthlyContribution) * (1 + monthlyRate);
        principal += monthlyContribution;
      }
      
      if (month === 0) {
        data.push({
          year: "Start",
          principal: Math.round(yearPrincipal),
          interest: 0,
          total: Math.round(yearBalance)
        });
      } else {
        data.push({
          year: `Year ${month / 12}`,
          principal: Math.round(principal),
          interest: Math.round(balance - principal),
          total: Math.round(balance)
        });
      }
    }
    
    setProjectionData(data);
    setCurrentTotal(Math.round(balance));
    
    toast({
      title: "Projection calculated!",
      description: `Your investment could grow to $${Math.round(balance).toLocaleString()} in ${years} years.`,
    });
  };

  const onSubmit = (values: ScenarioForm) => {
    calculateProjection(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="mr-2 h-5 w-5 text-[#9b87f5]" />
          Financial "What-If" Scenario Planner
        </CardTitle>
        <CardDescription>
          Explore different financial scenarios to see how your decisions could impact your future
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="initialInvestment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initial Investment ($)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="monthlyContribution"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Contribution ($)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="years"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="interestRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Return (%)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" {...field} onChange={e => field.onChange(Number(e.target.value))} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="submit" className="w-full">Calculate Projection</Button>
              </form>
            </Form>
            
            {currentTotal > 0 && (
              <div className="mt-6 p-4 bg-[#9b87f5]/10 rounded-lg">
                <h3 className="font-medium text-lg">Projected Total</h3>
                <div className="text-3xl font-bold text-[#9b87f5]">
                  ${currentTotal.toLocaleString()}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on your inputs, this could be your investment value
                </p>
              </div>
            )}
          </div>
          
          <div>
            {projectionData.length > 0 && (
              <div className="h-[350px]">
                <ChartContainer config={chartConfig}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={projectionData}
                      margin={{ top: 10, right: 10, left: 10, bottom: 20 }}
                    >
                      <XAxis 
                        dataKey="year" 
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                      />
                      <ChartTooltip
                        content={<ChartTooltipContent labelKey="year" />}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="principal" 
                        name="principal"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="interest" 
                        name="interest"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            )}
            
            {projectionData.length === 0 && (
              <div className="h-[350px] flex items-center justify-center border rounded-lg">
                <div className="text-center p-6">
                  <h3 className="font-medium text-lg mb-2">Enter Your Details</h3>
                  <p className="text-muted-foreground">
                    Fill out the form and click "Calculate Projection" to see your investment growth chart.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScenarioPlanner;
