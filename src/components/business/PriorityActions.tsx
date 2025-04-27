
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Layers, ShoppingBag, Globe } from "lucide-react";

const PriorityActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Layers className="mr-2 h-5 w-5 text-blue-500" />
          Priority Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
            <div className="flex gap-3">
              <Globe className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Create Google Business Profile</div>
                <div className="text-sm text-muted-foreground">Help local customers find your business online</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-blue-100">High Impact</Badge>
              <Button size="sm">
                Start
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
            <div className="flex gap-3">
              <ShoppingBag className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium">Set up online ordering</div>
                <div className="text-sm text-muted-foreground">Enable customers to order ahead and skip the line</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-green-100">Medium Impact</Badge>
              <Button size="sm">
                Start
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-100">
            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 text-gray-600" />
              <div>
                <div className="font-medium">Email marketing automation</div>
                <div className="text-sm text-muted-foreground">Connect with customers through automated emails</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Completed</Badge>
              <Button size="sm" variant="outline">
                View
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>

          <Button variant="ghost" className="w-full mt-2 border">
            View All Actions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriorityActions;
