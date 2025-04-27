
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapIcon, 
  CheckCircle, 
  Circle, 
  Calendar, 
  AlertCircle,
  ArrowRight,
  Download,
  Share2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const DigitalRoadmap = () => {
  const phases = [
    {
      title: "Phase 1: Foundation",
      description: "Set up essential digital tools",
      progress: 75,
      status: "In Progress",
      tasks: [
        { name: "Create Google Business Profile", completed: true },
        { name: "Set up basic website", completed: true },
        { name: "Implement digital payment options", completed: true },
        { name: "Establish social media presence", completed: false },
      ]
    },
    {
      title: "Phase 2: Growth",
      description: "Expand digital capabilities",
      progress: 0,
      status: "Upcoming",
      tasks: [
        { name: "Implement online booking system", completed: false },
        { name: "Set up email marketing", completed: false },
        { name: "Create customer database", completed: false },
        { name: "Implement customer feedback system", completed: false },
      ]
    },
    {
      title: "Phase 3: Optimization",
      description: "Refine your digital strategy",
      progress: 0,
      status: "Upcoming",
      tasks: [
        { name: "Analyze customer data", completed: false },
        { name: "Implement loyalty program", completed: false },
        { name: "Optimize website for conversions", completed: false },
        { name: "Develop advanced marketing campaigns", completed: false },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center mb-2">
                <MapIcon className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Your Digital Transformation Plan</h3>
              </div>
              <p className="text-muted-foreground">
                Personalized 12-month roadmap based on your business goals and priorities
              </p>
              <div className="mt-4 flex items-center">
                <Progress value={25} className="h-2 w-40 mr-3" />
                <span className="text-sm font-medium">25% Complete</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button>
                Update Plan
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {phases.map((phase, phaseIndex) => (
            <Card key={phaseIndex} className={`mb-6 ${phase.status === 'In Progress' ? 'border-blue-300 border-2' : ''}`}>
              <CardHeader className="border-b bg-muted/50">
                <div className="flex justify-between items-center">
                  <CardTitle>{phase.title}</CardTitle>
                  <Badge variant={phase.status === 'In Progress' ? "default" : "outline"}>
                    {phase.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{phase.description}</p>
                {phase.progress > 0 && (
                  <div className="flex items-center mt-2">
                    <Progress value={phase.progress} className="h-2 flex-1 mr-3" />
                    <span className="text-sm font-medium">{phase.progress}%</span>
                  </div>
                )}
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center justify-between border-b pb-3 last:border-0">
                      <div className="flex items-center">
                        {task.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground mr-3" />
                        )}
                        <span className={task.completed ? "line-through text-muted-foreground" : ""}>
                          {task.name}
                        </span>
                      </div>
                      <Button 
                        variant={task.completed ? "outline" : "default"} 
                        size="sm"
                        disabled={phase.status === 'Upcoming'}
                      >
                        {task.completed ? "View Details" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Upcoming Milestones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Complete social media setup</p>
                  <p className="text-muted-foreground text-sm">Due in 3 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-4 w-4 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium">Start Phase 2: Growth</p>
                  <p className="text-muted-foreground text-sm">Due in 2 weeks</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-medium">Plan Adjustment Recommended</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Based on your progress, we suggest prioritizing email marketing earlier.
                  </p>
                  <Button size="sm" variant="outline" className="mt-3">
                    Review Suggestion
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Expert Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Need help with your digital roadmap? Our experts can help you adjust and optimize your plan.
              </p>
              <Button className="w-full mt-4">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DigitalRoadmap;
