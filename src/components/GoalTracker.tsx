
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlusCircle, ChevronDown } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface Goal {
  id: number;
  name: string;
  amount: number;
  targetAmount: number;
  progress: number;
  deadline: string;
  steps: {
    id: number;
    name: string;
    completed: boolean;
  }[];
}

const GoalTracker = () => {
  const [expandedGoal, setExpandedGoal] = useState<number | null>(1);
  const [goals] = useState<Goal[]>([
    {
      id: 1,
      name: "Emergency Fund",
      amount: 4500,
      targetAmount: 10000,
      progress: 45,
      deadline: "Dec 2024",
      steps: [
        { id: 1, name: "Open high-interest savings account", completed: true },
        { id: 2, name: "Set up automatic transfers of $300/month", completed: true },
        { id: 3, name: "Reduce food delivery to increase monthly contribution", completed: false },
        { id: 4, name: "Review and adjust monthly amount quarterly", completed: false },
      ]
    },
    {
      id: 2,
      name: "New Car Down Payment",
      amount: 2000,
      targetAmount: 5000,
      progress: 40,
      deadline: "Oct 2024",
      steps: [
        { id: 1, name: "Research car models and prices", completed: true },
        { id: 2, name: "Set up dedicated savings account", completed: true },
        { id: 3, name: "Save $250 per month minimum", completed: false },
        { id: 4, name: "Sell unused items to boost savings", completed: false },
      ]
    },
    {
      id: 3,
      name: "Vacation Fund",
      amount: 800,
      targetAmount: 3000,
      progress: 25,
      deadline: "Jun 2025",
      steps: [
        { id: 1, name: "Decide on destination", completed: true },
        { id: 2, name: "Research estimated costs", completed: true },
        { id: 3, name: "Set aside $150 monthly", completed: false },
        { id: 4, name: "Book flights during sale period", completed: false },
      ]
    }
  ]);

  const toggleGoal = (goalId: number) => {
    setExpandedGoal(expandedGoal === goalId ? null : goalId);
  };

  const completeStep = (goalId: number, stepId: number) => {
    // This would update the state in a real app
    toast({
      title: "Step completed!",
      description: "You're making great progress toward your financial goal!",
    });
  };

  const showCreateGoalWizard = () => {
    toast({
      title: "Goal Setting Wizard",
      description: "Let's create a new financial goal and break it into steps.",
    });
    // In a real app, this would open a wizard or modal
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Your Financial Goals</CardTitle>
          <CardDescription>Track progress toward your savings targets</CardDescription>
        </div>
        <Button onClick={showCreateGoalWizard}>
          <PlusCircle className="h-4 w-4 mr-2" />
          New Goal
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="border rounded-lg p-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleGoal(goal.id)}
              >
                <div className="flex-1">
                  <h3 className="font-medium">{goal.name}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground">
                      ${goal.amount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Target: {goal.deadline}
                    </span>
                  </div>
                  <Progress className="h-2 mt-2" value={goal.progress} />
                </div>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform ml-2 ${expandedGoal === goal.id ? "transform rotate-180" : ""}`} 
                />
              </div>
              
              {expandedGoal === goal.id && (
                <div className="mt-4 pt-4 border-t">
                  <h4 className="font-medium mb-2">Steps to achieve this goal:</h4>
                  <div className="space-y-2">
                    {goal.steps.map((step) => (
                      <div key={step.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={step.completed}
                          onChange={() => completeStep(goal.id, step.id)}
                          className="rounded border-gray-300 mr-2"
                        />
                        <span className={step.completed ? "line-through text-muted-foreground" : ""}>
                          {step.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <Button size="sm" variant="outline">
                      Add Step
                    </Button>
                    <Button size="sm">
                      Adjust Goal
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalTracker;
