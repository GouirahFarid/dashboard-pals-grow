
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  ArrowRight, 
  Calendar, 
  CreditCard, 
  Users, 
  Globe, 
  TrendingUp
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import DigitalHealthScore from './DigitalHealthScore';
import PriorityActions from './PriorityActions';

const BusinessDashboard = () => {
  const showTip = () => {
    toast({
      title: "Quick Tip",
      description: "Start with one digital tool and master it before moving to the next one.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome, Coffee Shop Owner!</h1>
          <p className="text-muted-foreground">Your digital transformation journey is 35% complete.</p>
        </div>
        <div className="flex space-x-2 mt-4 md:mt-0">
          <Button onClick={showTip}>
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Digital Tips
          </Button>
          <Button variant="outline">
            <Globe className="mr-2 h-5 w-5" />
            Website Check
          </Button>
        </div>
      </div>

      <DigitalHealthScore />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-blue-500" />
              Online Booking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Not Started</div>
            <Progress className="h-2 mt-2" value={0} />
            <p className="text-sm text-muted-foreground mt-2">
              Allowing customers to book appointments online can increase business by 30%.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Start Setup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-green-500" />
              Digital Payments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">In Progress</div>
            <Progress className="h-2 mt-2" value={60} />
            <p className="text-sm text-muted-foreground mt-2">
              You've set up basic digital payments. Add contactless options to improve efficiency.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              Continue Setup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-purple-500" />
              Customer Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Completed</div>
            <Progress className="h-2 mt-2" value={100} />
            <p className="text-sm text-muted-foreground mt-2">
              Your customer database is set up! Consider setting up automated follow-ups.
            </p>
            <Button variant="outline" size="sm" className="mt-4">
              View Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PriorityActions />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2 h-5 w-5 text-blue-500" />
              Business Growth
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Online Visibility</p>
                <Progress value={42} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">42% of similar businesses in your area</p>
              </div>
              <div>
                <p className="font-medium">Digital Efficiency</p>
                <Progress value={28} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">28% of operations digitized</p>
              </div>
              <div>
                <p className="font-medium">Customer Engagement</p>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">65% engagement rate</p>
              </div>
              <Button className="w-full mt-2">View Full Analysis</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessDashboard;
