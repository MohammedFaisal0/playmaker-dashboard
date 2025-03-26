
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Check, X, HelpCircle } from "lucide-react";

interface RecommendationProps {
  id: number;
  type: "formation" | "substitution" | "tactic";
  title: string;
  description: string;
  urgency: "low" | "medium" | "high";
}

const recommendations: RecommendationProps[] = [
  {
    id: 1,
    type: "formation",
    title: "Switch to 4-3-3",
    description: "Opponent is vulnerable on the wings. Shifting to 4-3-3 will create more attacking opportunities.",
    urgency: "medium",
  },
  {
    id: 2,
    type: "substitution",
    title: "Replace Player #7",
    description: "Fatigue Level at 85%. High risk of injury if continued.",
    urgency: "high",
  },
  {
    id: 3,
    type: "tactic",
    title: "Free-kick Strategy: Target Zone A",
    description: "Low defensive coverage detected in left side of penalty area.",
    urgency: "low",
  },
];

export function TacticalPanel() {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      case "low":
      default:
        return "info";
    }
  };
  
  return (
    <Card className="animate-fade-in-right">
      <CardHeader>
        <CardTitle>Tactical Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="rounded-lg border p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{rec.title}</h4>
                    <Badge variant={getUrgencyColor(rec.urgency)}>
                      {rec.urgency}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {rec.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mt-3">
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded bg-tactimind-green/10 text-tactimind-green py-1.5 text-sm font-medium hover:bg-tactimind-green/20 transition-colors">
                  <Check className="w-4 h-4" />
                  <span>Accept</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 rounded bg-tactimind-red/10 text-tactimind-red py-1.5 text-sm font-medium hover:bg-tactimind-red/20 transition-colors">
                  <X className="w-4 h-4" />
                  <span>Dismiss</span>
                </button>
                <button className="w-9 flex items-center justify-center rounded bg-primary/10 text-primary py-1.5 text-sm font-medium hover:bg-primary/20 transition-colors">
                  <HelpCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
