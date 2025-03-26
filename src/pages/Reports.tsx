
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BarChart, Download, ExternalLink, Film, Share2 } from "lucide-react";

export default function Reports() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Automated Reports</h1>
          <p className="text-muted-foreground">
            Post-match analysis and opponent insights.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Match report card */}
          <Card glassEffect className="col-span-full md:col-span-1 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge>Latest Report</Badge>
                <div className="text-sm text-muted-foreground">2 hours ago</div>
              </div>
              <CardTitle className="mt-2">FC Barcelona vs Real Madrid</CardTitle>
              <div className="text-sm text-muted-foreground">September 12, 2023</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 text-lg font-semibold">
                  <div>2</div>
                  <div className="text-center text-sm text-muted-foreground">Final Score</div>
                  <div>1</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div>Possession</div>
                    <div className="font-medium">58%</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Shots on Target</div>
                    <div className="font-medium">7</div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div>Completed Passes</div>
                    <div className="font-medium">423</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 text-primary py-2 text-sm font-medium hover:bg-primary/20 transition-colors">
                    <Film className="w-4 h-4" />
                    <span>Highlights</span>
                  </button>
                  <button className="flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 text-primary py-2 px-3 text-sm font-medium hover:bg-primary/20 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center gap-1.5 rounded-lg bg-primary/10 text-primary py-2 px-3 text-sm font-medium hover:bg-primary/20 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Opponent analysis card */}
          <Card className="col-span-full md:col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Opponent Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium mb-1">Left Defense</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-tactimind-red">72%</span>
                      <span className="text-xs text-muted-foreground">Vulnerability</span>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium mb-1">Counter-attacks</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-tactimind-green">85%</span>
                      <span className="text-xs text-muted-foreground">Success Rate</span>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium mb-1">Set Pieces</div>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-tactimind-yellow">45%</span>
                      <span className="text-xs text-muted-foreground">Defense Rate</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Key Player Performance</div>
                    <button className="flex items-center text-xs text-primary">
                      <span>View All</span>
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div>Rodriguez, F.</div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1.5">80%</span>
                        <span className="text-xs text-muted-foreground">Tackle Success</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div>Johnson, T.</div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1.5">42%</span>
                        <span className="text-xs text-muted-foreground">Shot Accuracy</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div>Müller, K.</div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1.5">93%</span>
                        <span className="text-xs text-muted-foreground">Pass Completion</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <button className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                    <BarChart className="w-4 h-4 mr-1" />
                    <span>Full Statistical Breakdown</span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Recent reports list */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">Team vs Opponent {i + 1}</div>
                    <div className="text-sm text-muted-foreground">
                      {i === 0 ? "2 days ago" : i === 1 ? "1 week ago" : `${i + 1} weeks ago`}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="rounded p-2 hover:bg-accent transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="rounded p-2 hover:bg-accent transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
