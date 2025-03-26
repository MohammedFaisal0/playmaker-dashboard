
import { PitchVisualization } from "@/components/dashboard/PitchVisualization";
import { PlayerCard } from "@/components/dashboard/PlayerCard";
import { TacticalPanel } from "@/components/dashboard/TacticalPanel";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Film, Pause, Play } from "lucide-react";

// Sample player data
const players = [
  {
    id: 1,
    name: "John Smith",
    position: "Forward",
    number: 9,
    heartRate: 165,
    hydration: 82,
    fatigue: 55,
  },
  {
    id: 2,
    name: "David Lee",
    position: "Midfielder",
    number: 8,
    heartRate: 172,
    hydration: 78,
    fatigue: 65,
  },
  {
    id: 3,
    name: "Mark Wilson",
    position: "Defender",
    number: 4,
    heartRate: 160,
    hydration: 85,
    fatigue: 40,
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    position: "Midfielder",
    number: 10,
    heartRate: 188,
    hydration: 65,
    fatigue: 75,
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Coach Dashboard</h1>
          <p className="text-muted-foreground">
            Live match analytics and real-time tactical recommendations.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-6 lg:grid-cols-12">
          {/* Main content - Pitch visualization and video */}
          <div className="col-span-full md:col-span-4 lg:col-span-8 space-y-6">
            {/* Live match feed */}
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle>Live Match Feed</CardTitle>
                <div className="flex items-center gap-2">
                  <button className="rounded-full p-1.5 bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Play className="h-4 w-4" />
                  </button>
                  <button className="rounded-full p-1.5 bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Pause className="h-4 w-4" />
                  </button>
                  <button className="rounded-full p-1.5 bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Film className="h-4 w-4" />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-gray-900 aspect-video w-full flex items-center justify-center">
                  {/* This would be a video player in a real app */}
                  <div className="text-white/50 text-sm font-medium">
                    Live Video Stream
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Interactive 3D heatmap / pitch visualization */}
            <Card>
              <CardHeader>
                <CardTitle>Interactive Pitch Visualization</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] overflow-hidden rounded-b-lg">
                  <PitchVisualization />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sidebar - Tactical recommendations and player stats */}
          <div className="col-span-full md:col-span-2 lg:col-span-4 space-y-6">
            {/* Tactical recommendations */}
            <TacticalPanel />
            
            {/* Player health stats */}
            <Card>
              <CardHeader>
                <CardTitle>Player Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {players.map(player => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
