
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import FinancialHealthCard from '@/components/FinancialHealthCard';
import GoalTracker from '@/components/GoalTracker';
import RecentTransactions from '@/components/RecentTransactions';
import HabitsTracker from '@/components/HabitsTracker';
import { ChartPieIcon, Coins, BadgePercent, TrendingUp, PiggyBank } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const showFinancialTip = () => {
    toast({
      title: "Financial Tip",
      description: "Try saving 20% of your income each month to build your emergency fund faster!",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Your financial wellness journey is on track.</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button onClick={showFinancialTip}>
            <PiggyBank className="mr-2 h-5 w-5" />
            Daily Tip
          </Button>
          <Button variant="outline">
            <ChartPieIcon className="mr-2 h-5 w-5" />
            Create Budget
          </Button>
        </div>
      </div>

      <FinancialHealthCard />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coins className="mr-2 h-5 w-5 text-purple-500" />
              Monthly Savings Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$642 of $800</div>
            <Progress className="h-2 mt-2" value={80} />
            <p className="text-sm text-muted-foreground mt-2">
              You're 80% of the way there! Just $158 more to reach your goal.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Add Funds
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BadgePercent className="mr-2 h-5 w-5 text-green-500" />
              Debt Reduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450 paid off</div>
            <Progress className="h-2 mt-2" value={35} />
            <p className="text-sm text-muted-foreground mt-2">
              You've reduced your debt by 35% this year. Great progress!
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              See Plan
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GoalTracker />
        </div>
        <RecentTransactions />
      </div>

      <HabitsTracker />
    </div>
  );
};

export default Dashboard;
