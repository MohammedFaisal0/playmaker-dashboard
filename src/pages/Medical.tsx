
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/Badge";
import { Calendar, ChevronRight, FileClock, Heart, Timer } from "lucide-react";

export default function Medical() {
  const players = [
    {
      id: 1,
      name: "John Smith",
      position: "Forward",
      heartRate: 72,
      hydration: 92,
      fatigue: 25,
      status: "good",
    },
    {
      id: 2,
      name: "David Lee",
      position: "Midfielder",
      heartRate: 68,
      hydration: 88,
      fatigue: 35,
      status: "good",
    },
    {
      id: 3,
      name: "Mark Wilson",
      position: "Defender",
      heartRate: 75,
      hydration: 85,
      fatigue: 30,
      status: "good",
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      position: "Midfielder",
      heartRate: 82,
      hydration: 75,
      fatigue: 65,
      status: "warning",
    },
    {
      id: 5,
      name: "James Johnson",
      position: "Goalkeeper",
      heartRate: 85,
      hydration: 70,
      fatigue: 80,
      status: "danger",
    },
    {
      id: 6,
      name: "Michael Brown",
      position: "Defender",
      heartRate: 70,
      hydration: 80,
      fatigue: 40,
      status: "good",
    },
  ];
  
  const injuries = [
    {
      player: "Thomas Anderson",
      injury: "Hamstring Strain",
      progress: 90,
      returnsIn: "3 days",
    },
    {
      player: "Robert Clark",
      injury: "Ankle Sprain",
      progress: 65,
      returnsIn: "2 weeks",
    },
    {
      player: "Kevin Williams",
      injury: "Knee Ligament",
      progress: 30,
      returnsIn: "6 weeks",
    },
  ];
  
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Medical Dashboard</h1>
          <p className="text-muted-foreground">
            Player health monitoring and injury prevention.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Health overview cards */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle>Team Health Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg border">
                  <Heart className="w-8 h-8 text-tactimind-red mb-2" />
                  <div className="text-3xl font-bold">75</div>
                  <div className="text-sm text-muted-foreground">Avg. Heart Rate</div>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4 rounded-lg border">
                  <Timer className="w-8 h-8 text-tactimind-yellow mb-2" />
                  <div className="text-3xl font-bold">45%</div>
                  <div className="text-sm text-muted-foreground">Avg. Fatigue</div>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4 rounded-lg border">
                  <Calendar className="w-8 h-8 text-tactimind-blue mb-2" />
                  <div className="text-3xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Active Injuries</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Real-time biometrics */}
          <Card className="col-span-full lg:col-span-2">
            <CardHeader>
              <CardTitle>Real-Time Biometrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {players.map((player) => (
                  <div key={player.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">{player.name}</div>
                        <div className="text-xs text-muted-foreground">{player.position}</div>
                      </div>
                      <StatusBadge status={player.status} label="" className="w-2 h-2 p-0" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">Heart Rate</div>
                        <div className="font-medium">{player.heartRate} BPM</div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">Hydration</div>
                        <div className="font-medium">{player.hydration}%</div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">Fatigue</div>
                        <div className="font-medium">{player.fatigue}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Injury risk & recovery tracker */}
          <Card className="col-span-full lg:col-span-1">
            <CardHeader>
              <CardTitle>Recovery Tracker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {injuries.map((injury, i) => (
                  <div key={i} className="rounded-lg border p-4">
                    <div className="mb-2">
                      <div className="font-medium">{injury.player}</div>
                      <div className="text-sm text-muted-foreground">{injury.injury}</div>
                    </div>
                    
                    <div className="mb-2 h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-tactimind-green"
                        style={{ width: `${injury.progress}%` }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <FileClock className="w-3.5 h-3.5 mr-1.5 text-muted-foreground" />
                        <span>{injury.progress}% Healed</span>
                      </div>
                      <div className="text-muted-foreground">Returns in {injury.returnsIn}</div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full flex items-center justify-center rounded-lg border border-dashed p-3 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors">
                  <span>View Recovery Schedule</span>
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
