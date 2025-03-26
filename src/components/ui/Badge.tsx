
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BadgeVariant = "default" | "success" | "warning" | "danger" | "info";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  pulsing?: boolean;
}

export function Badge({ 
  children, 
  variant = "default", 
  className,
  pulsing = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        pulsing && "animate-pulse-gentle",
        variant === "default" && "bg-primary/10 text-primary",
        variant === "success" && "bg-tactimind-green/10 text-tactimind-green",
        variant === "warning" && "bg-tactimind-yellow/10 text-tactimind-yellow",
        variant === "danger" && "bg-tactimind-red/10 text-tactimind-red",
        variant === "info" && "bg-blue-500/10 text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}

export function StatusBadge({ 
  status, 
  label,
  className 
}: { 
  status: "good" | "warning" | "danger"; 
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        status === "good" && "bg-tactimind-green/10 text-tactimind-green",
        status === "warning" && "bg-tactimind-yellow/10 text-tactimind-yellow",
        status === "danger" && "bg-tactimind-red/10 text-tactimind-red",
        className
      )}
    >
      <span className={`status-indicator status-${status}`} />
      {label}
    </span>
  );
}
