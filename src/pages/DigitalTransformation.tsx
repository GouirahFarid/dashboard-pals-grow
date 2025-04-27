
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BusinessDashboard from '@/components/business/BusinessDashboard';
import SetupWizards from '@/components/business/SetupWizards';
import JourneyMapper from '@/components/business/JourneyMapper';
import MarketingHub from '@/components/business/MarketingHub';
import AnalyticsDashboard from '@/components/business/AnalyticsDashboard';
import LearningCenter from '@/components/business/LearningCenter';
import DigitalRoadmap from '@/components/business/DigitalRoadmap';

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD]/30 to-[#F1F0FB]/30">
      <div className="container px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Financial Wellness
          </Button>
        </Link>
        
        <Tabs defaultValue="dashboard" className="space-y-6">
          <div className="sticky top-0 z-10 bg-gradient-to-br from-background/80 to-background/80 backdrop-blur-sm pb-2">
            <h1 className="text-4xl font-bold text-center mb-6 text-[#0EA5E9]">Digital Transformation</h1>
            <TabsList className="grid grid-cols-7 w-full max-w-5xl mx-auto">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="setup">Setup Wizards</TabsTrigger>
              <TabsTrigger value="journey">Journey Map</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            </TabsList>
          </div>
          
          <ScrollArea className="h-[calc(100vh-140px)]">
            <div className="max-w-6xl mx-auto pb-20">
              <TabsContent value="dashboard">
                <BusinessDashboard />
              </TabsContent>
              
              <TabsContent value="setup">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Setup Wizards</h2>
                  <p className="text-muted-foreground">
                    Get guided assistance setting up essential digital tools for your business.
                  </p>
                  <SetupWizards />
                </div>
              </TabsContent>
              
              <TabsContent value="journey">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Customer Journey Mapper</h2>
                  <p className="text-muted-foreground">
                    Identify digital touchpoints and discover improvement opportunities in your customer journey.
                  </p>
                  <JourneyMapper />
                </div>
              </TabsContent>
              
              <TabsContent value="marketing">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Digital Marketing Hub</h2>
                  <p className="text-muted-foreground">
                    Templates and automation tools to enhance your digital marketing efforts.
                  </p>
                  <MarketingHub />
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Business Analytics</h2>
                  <p className="text-muted-foreground">
                    Actionable insights that help you make data-driven decisions without requiring technical expertise.
                  </p>
                  <AnalyticsDashboard />
                </div>
              </TabsContent>
              
              <TabsContent value="learning">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Learning Center</h2>
                  <p className="text-muted-foreground">
                    Access tutorials, guides, and resources to help you understand digital tools.
                  </p>
                  <LearningCenter />
                </div>
              </TabsContent>
              
              <TabsContent value="roadmap">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold">Digital Roadmap</h2>
                  <p className="text-muted-foreground">
                    Your personalized transformation plan to guide your business's digital journey.
                  </p>
                  <DigitalRoadmap />
                </div>
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
};

export default DigitalTransformation;
