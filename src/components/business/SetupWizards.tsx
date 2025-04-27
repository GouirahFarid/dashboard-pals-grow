
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, Users, Clock, ShoppingBag, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SetupWizards = () => {
  const wizards = [
    {
      title: "Appointment Booking",
      description: "Set up online scheduling for your services",
      icon: Calendar,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      badge: "Popular",
      badgeColor: "bg-blue-100",
      time: "15-20 min",
    },
    {
      title: "Digital Payments",
      description: "Accept online and contactless payments",
      icon: CreditCard,
      color: "text-green-500",
      bgColor: "bg-green-50",
      badge: "Essential",
      badgeColor: "bg-green-100",
      time: "10-15 min",
    },
    {
      title: "Customer Database",
      description: "Track and manage customer information",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      badge: null,
      time: "20-25 min",
    },
    {
      title: "Business Hours",
      description: "Display your hours online across all platforms",
      icon: Clock,
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      badge: "Quick Setup",
      badgeColor: "bg-orange-100",
      time: "5 min",
    },
    {
      title: "Online Store",
      description: "Sell products through your website",
      icon: ShoppingBag,
      color: "text-red-500",
      bgColor: "bg-red-50",
      badge: "Advanced",
      badgeColor: "bg-red-100",
      time: "30-45 min",
    },
    {
      title: "Email Marketing",
      description: "Create campaigns to reach your customers",
      icon: Mail,
      color: "text-sky-500",
      bgColor: "bg-sky-50",
      badge: null,
      time: "15-20 min",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {wizards.map((wizard, index) => (
        <Card key={index} className={`${wizard.bgColor} border`}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center">
              <wizard.icon className={`mr-2 h-5 w-5 ${wizard.color}`} />
              <CardTitle>{wizard.title}</CardTitle>
            </div>
            {wizard.badge && (
              <Badge variant="outline" className={wizard.badgeColor}>
                {wizard.badge}
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-3">{wizard.description}</CardDescription>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-muted-foreground">{wizard.time}</span>
              <Button size="sm">Start Wizard</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SetupWizards;
