
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapIcon, Plus } from "lucide-react";

const JourneyMapper = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Customer Touchpoints</h3>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Journey Map
        </Button>
      </div>
      
      <Card className="border-2 border-blue-200">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
            <div className="rounded-full bg-blue-100 p-3">
              <MapIcon className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-medium">Create Your First Journey Map</h3>
            <p className="text-muted-foreground max-w-md">
              Map out how customers interact with your business and identify opportunities to improve their experience with digital tools.
            </p>
            <Button size="lg" className="mt-2">
              Start Mapping
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-2">Sample: Coffee Shop Customer Journey</h3>
            <p className="text-sm text-muted-foreground mb-4">
              See how a typical coffee shop maps their customer touchpoints and digital opportunities.
            </p>
            <Button variant="outline">View Sample</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium text-lg mb-2">Journey Mapping Guide</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn the basics of customer journey mapping and how to identify digital improvement opportunities.
            </p>
            <Button variant="outline">View Guide</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JourneyMapper;
