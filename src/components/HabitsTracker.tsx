
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, CheckCircle, Circle } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

interface HabitDay {
  day: string;
  completed: boolean;
}

interface FinancialHabit {
  id: number;
  name: string;
  description: string;
  streak: number;
  history: HabitDay[];
}

const HabitsTracker = () => {
  const habits: FinancialHabit[] = [
    {
      id: 1,
      name: "Check accounts daily",
      description: "Review your spending and stay aware of your balances",
      streak: 7,
      history: [
        { day: "Mon", completed: true },
        { day: "Tue", completed: true },
        { day: "Wed", completed: true },
        { day: "Thu", completed: true },
        { day: "Fri", completed: true },
        { day: "Sat", completed: true },
        { day: "Sun", completed: true },
      ]
    },
    {
      id: 2,
      name: "No impulse purchases",
      description: "Wait 24 hours before making unplanned purchases",
      streak: 4,
      history: [
        { day: "Mon", completed: true },
        { day: "Tue", completed: true },
        { day: "Wed", completed: false },
        { day: "Thu", completed: true },
        { day: "Fri", completed: true },
        { day: "Sat", completed: false },
        { day: "Sun", completed: true },
      ]
    },
    {
      id: 3,
      name: "Weekly expense review",
      description: "Categorize and review your spending each week",
      streak: 3,
      history: [
        { day: "Week 1", completed: true },
        { day: "Week 2", completed: true },
        { day: "Week 3", completed: true },
        { day: "Week 4", completed: false },
      ]
    }
  ];

  const completeHabit = (habitId: number) => {
    // This would update the state in a real app
    toast({
      title: "Habit completed!",
      description: "Great job maintaining your financial wellness habits!",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Award className="mr-2 h-5 w-5 text-[#9b87f5]" />
          Financial Wellness Habits
        </CardTitle>
        <CardDescription>
          Build healthy financial habits through consistent small actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {habits.map((habit) => (
            <div key={habit.id} className="border-b pb-4 last:border-b-0 last:pb-0">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{habit.name}</h3>
                  <p className="text-sm text-muted-foreground">{habit.description}</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#9b87f5]/10 text-[#9b87f5] font-medium px-2 py-1 rounded text-sm mr-2">
                    {habit.streak} day streak
                  </div>
                  <button 
                    onClick={() => completeHabit(habit.id)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Circle className="h-6 w-6 text-[#9b87f5]" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-3">
                {habit.history.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <span className="text-xs text-muted-foreground">{day.day}</span>
                    {day.completed ? (
                      <CheckCircle className="h-5 w-5 mt-1 text-green-500 fill-green-100" />
                    ) : (
                      <Circle className="h-5 w-5 mt-1 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitsTracker;
