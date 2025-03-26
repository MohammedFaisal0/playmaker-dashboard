
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { StatusBadge } from "../ui/Badge";
import { Heart, Droplet, Activity } from "lucide-react";

interface PlayerCardProps {
  player: {
    id: number;
    name: string;
    position: string;
    number: number;
    heartRate: number;
    hydration: number;
    fatigue: number;
  };
}

export function PlayerCard({ player }: PlayerCardProps) {
  // Compute health status
  const getHeartRateStatus = (hr: number) => {
    if (hr > 185) return "danger";
    if (hr > 170) return "warning";
    return "good";
  };
  
  const getHydrationStatus = (hydration: number) => {
    if (hydration < 60) return "danger";
    if (hydration < 75) return "warning";
    return "good";
  };
  
  const getFatigueStatus = (fatigue: number) => {
    if (fatigue > 80) return "danger";
    if (fatigue > 60) return "warning";
    return "good";
  };
  
  const getOverallStatus = () => {
    if (
      getHeartRateStatus(player.heartRate) === "danger" || 
      getHydrationStatus(player.hydration) === "danger" || 
      getFatigueStatus(player.fatigue) === "danger"
    ) {
      return "danger";
    }
    
    if (
      getHeartRateStatus(player.heartRate) === "warning" || 
      getHydrationStatus(player.hydration) === "warning" || 
      getFatigueStatus(player.fatigue) === "warning"
    ) {
      return "warning";
    }
    
    return "good";
  };
  
  return (
    <Card glassEffect hoverEffect className="animate-scale-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex flex-col">
          <CardTitle className="text-base">
            <span className="font-mono mr-1.5">{player.number}</span>
            {player.name}
          </CardTitle>
          <span className="text-xs text-muted-foreground">{player.position}</span>
        </div>
        <StatusBadge
          status={getOverallStatus()}
          label={getOverallStatus() === "good" ? "OK" : getOverallStatus()}
        />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Heart className="w-4 h-4 mr-1.5 text-tactimind-red" />
              <span>Heart Rate</span>
            </div>
            <span className={`text-sm font-medium ${getHeartRateStatus(player.heartRate) === "danger" ? "text-tactimind-red" : ""}`}>
              {player.heartRate} BPM
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Droplet className="w-4 h-4 mr-1.5 text-blue-500" />
              <span>Hydration</span>
            </div>
            <span className="text-sm font-medium">{player.hydration}%</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm">
              <Activity className="w-4 h-4 mr-1.5 text-tactimind-yellow" />
              <span>Fatigue</span>
            </div>
            <span className={`text-sm font-medium ${getFatigueStatus(player.fatigue) === "danger" ? "text-tactimind-red" : ""}`}>
              {player.fatigue}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
