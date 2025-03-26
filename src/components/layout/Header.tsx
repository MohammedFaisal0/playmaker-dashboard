
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, User, Moon, Sun } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Reports", path: "/reports" },
  { name: "Medical", path: "/medical" },
];

interface HeaderProps {
  toggleSidebar?: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4">
        <button 
          onClick={toggleSidebar}
          className="mr-4 p-2 rounded-md hover:bg-accent transition-colors lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-md bg-tactimind-blue">
            <div className="absolute inset-0 flex items-center justify-center text-white font-heading font-bold">
              T
            </div>
          </div>
          <span className="hidden md:inline-block font-heading font-semibold text-lg tracking-tight">
            TactiMind
          </span>
        </Link>

        <nav className="hidden mx-6 md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-md p-2 hover:bg-accent transition-colors"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          
          <div className="relative">
            <button className="flex items-center gap-1 rounded-md p-2 hover:bg-accent transition-colors">
              <User className="h-5 w-5" />
              <span className="hidden text-sm font-medium md:inline-block">
                Coach
              </span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
