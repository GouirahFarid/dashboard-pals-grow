
import React, { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface PetStats {
  happiness: number;
  energy: number;
  health: number;
}

const Pet = () => {
  const { toast } = useToast();
  const [stats, setStats] = useState<PetStats>({
    happiness: 70,
    energy: 80,
    health: 90,
  });
  
  const [lastInteraction, setLastInteraction] = useState<Date>(new Date());

  const motivationalMessages = [
    "You're doing great! Keep it up! 🌟",
    "I believe in you! Let's achieve great things together! 💪",
    "Your dedication is inspiring! 🎯",
    "You make every day special! ✨",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeSinceLastInteraction = now.getTime() - lastInteraction.getTime();
      
      if (timeSinceLastInteraction > 30000) { // 30 seconds
        setStats(prev => ({
          ...prev,
          happiness: Math.max(prev.happiness - 1, 0),
          energy: Math.max(prev.energy - 1, 0),
        }));
      }
    }, 30000);

    return () => clearInterval(timer);
  }, [lastInteraction]);

  const interact = (type: 'feed' | 'play' | 'rest') => {
    setLastInteraction(new Date());
    
    switch (type) {
      case 'feed':
        setStats(prev => ({
          ...prev,
          health: Math.min(prev.health + 10, 100),
          energy: Math.min(prev.energy + 5, 100),
        }));
        toast({
          description: "Yum! Thank you for the food! 🍜",
        });
        break;
      case 'play':
        setStats(prev => ({
          ...prev,
          happiness: Math.min(prev.happiness + 15, 100),
          energy: Math.max(prev.energy - 10, 0),
        }));
        toast({
          description: motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)],
        });
        break;
      case 'rest':
        setStats(prev => ({
          ...prev,
          energy: Math.min(prev.energy + 20, 100),
          health: Math.min(prev.health + 5, 100),
        }));
        toast({
          description: "Ahhh, that was a nice rest! 😴",
        });
        break;
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 bg-[#FDE1D3] rounded-full flex items-center justify-center animate-bounce-slow">
          <Heart className="w-16 h-16 text-[#9b87f5]" />
        </div>
        
        <div className="space-y-4 w-full">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#9b87f5]" /> Happiness
            </label>
            <Progress value={stats.happiness} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Star className="w-4 h-4 text-[#FEF7CD]" /> Energy
            </label>
            <Progress value={stats.energy} className="h-2" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#F2FCE2]" /> Health
            </label>
            <Progress value={stats.health} className="h-2" />
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            onClick={() => interact('feed')}
            className="bg-[#F2FCE2] text-gray-700 hover:bg-[#F2FCE2]/80"
          >
            Feed
          </Button>
          <Button 
            onClick={() => interact('play')}
            className="bg-[#FEF7CD] text-gray-700 hover:bg-[#FEF7CD]/80"
          >
            Play
          </Button>
          <Button 
            onClick={() => interact('rest')}
            className="bg-[#FDE1D3] text-gray-700 hover:bg-[#FDE1D3]/80"
          >
            Rest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pet;
