
import { useEffect, useRef } from "react";

interface PitchVisualizationProps {
  className?: string;
}

export function PitchVisualization({ className }: PitchVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      drawPitch(ctx, canvas.width, canvas.height);
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  // Draw football pitch
  const drawPitch = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Field dimensions
    const fieldColor = "#2E7D32";
    const lineColor = "rgba(255, 255, 255, 0.8)";
    const lineWidth = 2;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw field background
    ctx.fillStyle = fieldColor;
    ctx.fillRect(0, 0, width, height);
    
    const margin = 20;
    const playingAreaWidth = width - margin * 2;
    const playingAreaHeight = height - margin * 2;
    
    // Set line style
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    
    // Draw outer boundary
    ctx.strokeRect(margin, margin, playingAreaWidth, playingAreaHeight);
    
    // Draw halfway line
    ctx.beginPath();
    ctx.moveTo(width / 2, margin);
    ctx.lineTo(width / 2, height - margin);
    ctx.stroke();
    
    // Draw center circle
    ctx.beginPath();
    const centerCircleRadius = Math.min(playingAreaWidth, playingAreaHeight) * 0.1;
    ctx.arc(width / 2, height / 2, centerCircleRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Draw center dot
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, 3, 0, Math.PI * 2);
    ctx.fillStyle = lineColor;
    ctx.fill();
    
    // Draw penalty areas
    const penaltyAreaWidth = playingAreaWidth * 0.16;
    const penaltyAreaHeight = playingAreaHeight * 0.4;
    const penaltyAreaY = height / 2 - penaltyAreaHeight / 2;
    
    // Left penalty area
    ctx.strokeRect(
      margin, 
      penaltyAreaY, 
      penaltyAreaWidth, 
      penaltyAreaHeight
    );
    
    // Right penalty area
    ctx.strokeRect(
      width - margin - penaltyAreaWidth, 
      penaltyAreaY, 
      penaltyAreaWidth, 
      penaltyAreaHeight
    );
    
    // Draw goal areas
    const goalAreaWidth = playingAreaWidth * 0.06;
    const goalAreaHeight = playingAreaHeight * 0.2;
    const goalAreaY = height / 2 - goalAreaHeight / 2;
    
    // Left goal area
    ctx.strokeRect(
      margin, 
      goalAreaY, 
      goalAreaWidth, 
      goalAreaHeight
    );
    
    // Right goal area
    ctx.strokeRect(
      width - margin - goalAreaWidth, 
      goalAreaY, 
      goalAreaWidth, 
      goalAreaHeight
    );
    
    // Draw penalty spots
    const penaltySpotDistance = playingAreaWidth * 0.12;
    
    // Left penalty spot
    ctx.beginPath();
    ctx.arc(margin + penaltySpotDistance, height / 2, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Right penalty spot
    ctx.beginPath();
    ctx.arc(width - margin - penaltySpotDistance, height / 2, 3, 0, Math.PI * 2);
    ctx.fill();
  };
  
  return (
    <div className={`relative w-full h-full min-h-[300px] rounded-lg overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" />
      
      {/* Overlay content can be added here */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-white/70 font-medium text-sm">
          Interactive Pitch Visualization
        </div>
      </div>
    </div>
  );
}
