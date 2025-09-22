"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Video,
  FolderOpen,
  BarChart3,
  Settings,
  HelpCircle,
  Crown,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const sidebarItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Video, label: "My Videos", count: 12 },
  { icon: FolderOpen, label: "Projects", count: 8 },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
];

export function DashboardSidebar() {
  const { data } = useSelector((state: RootState) => state.auth);
  return (
    <aside className="w-64 border-r border-border bg-card/50">
      <div className="p-6 space-y-6">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-primary" />
            <span className="font-semibold text-sm">
              {data?.subscription?.plan
                ? data?.subscription?.plan.charAt(0).toUpperCase() +
                  data?.subscription?.plan.slice(1) +
                  " " +
                  "Plan"
                : "Free"}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Video limit</span>
              {data?.subscription?.plan === "basic" ? (
                <span className="font-medium">
                  {data?.subscription?.videoLimit || 0}/5
                </span>
              ) : data?.subscription?.plan === "pro" ||
                data?.subscription?.plan === "premium" ? (
                <span className="font-medium">Unlimited</span>
              ) : (
                <span className="font-medium text-primary">Subscribe</span>
              )}
            </div>

            {data?.subscription?.plan === "basic" && (
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{
                    width: `${
                      ((data?.subscription?.videoLimit || 0) / 5) * 100
                    }%`,
                  }}
                />
              </div>
            )}

            {(!data?.subscription?.plan ||
              data?.subscription?.plan === "free") && (
              <p className="text-xs text-muted-foreground">
                Upgrade your plan to unlock more exports 🚀
              </p>
            )}
          </div>

          <Link href={"/subscribe"}>
            <Button
              size="sm"
              variant="outline"
              className="w-full bg-transparent"
            >
              <Zap className="w-4 h-4 mr-2" />
              Upgrade Plan
            </Button>
          </Link>
        </div>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className="w-full justify-start gap-3"
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.count && (
                <Badge variant="secondary" className="text-xs">
                  {item.count}
                </Badge>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
