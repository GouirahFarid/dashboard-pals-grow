
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, CheckCircle, Clock, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const LearningCenter = () => {
  const tutorials = [
    {
      title: "Getting Started with Online Booking",
      category: "Beginner",
      duration: "6 min",
      completed: false,
      popular: true,
      icon: "video",
    },
    {
      title: "Setting Up Digital Payment Methods",
      category: "Beginner",
      duration: "12 min",
      completed: false,
      popular: true,
      icon: "video",
    },
    {
      title: "Creating Your First Email Campaign",
      category: "Intermediate",
      duration: "15 min",
      completed: false,
      popular: false,
      icon: "article",
    },
    {
      title: "Customer Database Management",
      category: "Beginner",
      duration: "8 min",
      completed: true,
      popular: false,
      icon: "video",
    },
    {
      title: "Search Engine Optimization Basics",
      category: "Intermediate",
      duration: "20 min",
      completed: false,
      popular: true,
      icon: "article",
    },
    {
      title: "Social Media Strategy for Small Businesses",
      category: "Intermediate",
      duration: "18 min",
      completed: false,
      popular: false,
      icon: "video",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tutorials and guides..."
            className="pl-9 w-full md:w-80"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            All Topics
          </Button>
          <Button variant="outline">
            My Progress
          </Button>
          <Button>
            Recommended
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <div className="relative h-40 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
              {tutorial.icon === 'video' ? (
                <div className="rounded-full bg-white/80 p-3 backdrop-blur-sm">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
              ) : (
                <div className="rounded-full bg-white/80 p-3 backdrop-blur-sm">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
              )}
              {tutorial.popular && (
                <Badge className="absolute top-2 right-2 bg-blue-600">
                  Popular
                </Badge>
              )}
            </div>
            <CardContent className="pt-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline">{tutorial.category}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {tutorial.duration}
                </div>
              </div>
              <h3 className="font-medium text-lg">{tutorial.title}</h3>
              <div className="flex justify-between items-center mt-4">
                {tutorial.completed ? (
                  <div className="flex items-center text-green-600 text-sm">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Completed
                  </div>
                ) : (
                  <div></div>
                )}
                <Button size="sm">
                  {tutorial.completed ? "Review Again" : "Start Learning"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Need personalized help?</h3>
            <p className="text-muted-foreground">Book a one-on-one session with a digital advisor</p>
          </div>
          <Button>Schedule Session</Button>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
