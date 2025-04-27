
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Instagram, Facebook, ShoppingBag, Search, Calendar } from "lucide-react";

const MarketingHub = () => {
  const templates = [
    {
      title: "Email Newsletter",
      description: "Weekly updates with promotions",
      icon: Mail,
      color: "text-blue-500",
      type: "Email"
    },
    {
      title: "Instagram Post Series",
      description: "Product showcase templates",
      icon: Instagram,
      color: "text-pink-500",
      type: "Social"
    },
    {
      title: "Facebook Ad Campaign",
      description: "Local awareness campaign",
      icon: Facebook,
      color: "text-blue-600",
      type: "Ad"
    },
    {
      title: "Product Announcement",
      description: "New item launch template",
      icon: ShoppingBag,
      color: "text-orange-500",
      type: "Email"
    },
    {
      title: "SEO Basics Pack",
      description: "Page optimization templates",
      icon: Search,
      color: "text-green-500",
      type: "SEO"
    },
    {
      title: "Event Promotion",
      description: "Workshop or event marketing",
      icon: Calendar,
      color: "text-purple-500",
      type: "Multi-channel"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-sky-50">
          <CardHeader>
            <CardTitle>Marketing Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ready-to-use templates for emails, social posts, and ads that you can customize for your business.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Browse All Templates</Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle>Automation Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Set up marketing campaigns that run automatically, saving you time and ensuring consistency.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Explore Automation</Button>
          </CardFooter>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle>Performance Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              See how your marketing efforts are performing with easy-to-understand metrics and insights.
            </p>
          </CardContent>
          <CardFooter>
            <Button>View Reports</Button>
          </CardFooter>
        </Card>
      </div>

      <h3 className="text-xl font-semibold mt-8">Popular Templates</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <template.icon className={`h-10 w-10 ${template.color}`} />
                <Badge variant="outline">{template.type}</Badge>
              </div>
              <h4 className="font-semibold text-lg">{template.title}</h4>
              <p className="text-muted-foreground text-sm">{template.description}</p>
            </div>
            <div className="bg-muted p-4 flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Used by 120+ businesses</span>
              <Button size="sm" variant="outline">Preview</Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <Button variant="outline">View All Templates</Button>
      </div>
    </div>
  );
};

export default MarketingHub;
