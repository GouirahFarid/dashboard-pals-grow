
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Dashboard from '@/components/Dashboard';
import SpendingInsights from '@/components/SpendingInsights';
import GoalTracker from '@/components/GoalTracker';
import ScenarioPlanner from '@/components/ScenarioPlanner';
import HabitsTracker from '@/components/HabitsTracker';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9b87f5]/10 to-[#FDE1D3]/10">
      <div className="container px-4 py-6">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="sticky top-0 z-10 bg-gradient-to-br from-background/80 to-background/80 backdrop-blur-sm pb-2">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#9b87f5]">Financial Wellness</h1>
            <TabsList className="grid grid-cols-5 w-full max-w-4xl mx-auto">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="goals">Goals</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="planner">What-If</TabsTrigger>
              <TabsTrigger value="habits">Habits</TabsTrigger>
            </TabsList>
          </div>
          
          <ScrollArea className="h-[calc(100vh-140px)]">
            <div className="max-w-6xl mx-auto pb-20">
              <TabsContent value="dashboard">
                <Dashboard />
              </TabsContent>
              
              <TabsContent value="goals">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Your Financial Goals</h2>
                  <p className="text-muted-foreground">
                    Set meaningful financial goals and break them down into manageable steps.
                  </p>
                  <GoalTracker />
                </div>
              </TabsContent>
              
              <TabsContent value="insights">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Spending Insights</h2>
                  <p className="text-muted-foreground">
                    Understand your spending patterns with helpful visualizations and actionable insights.
                  </p>
                  <SpendingInsights />
                </div>
              </TabsContent>
              
              <TabsContent value="planner">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Financial "What-If" Scenarios</h2>
                  <p className="text-muted-foreground">
                    Explore how different financial decisions could impact your future.
                  </p>
                  <ScenarioPlanner />
                </div>
              </TabsContent>
              
              <TabsContent value="habits">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Financial Habits</h2>
                  <p className="text-muted-foreground">
                    Build healthy financial habits with daily and weekly activities.
                  </p>
                  <HabitsTracker />
                </div>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
