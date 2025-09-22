"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Bell,
  Settings,
  LogOut,
  User,
  CreditCard,
  Crown,
} from "lucide-react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUser } from "@/store/actions/userActions";


export function DashboardHeader() {
  const dispatch = useDispatch<AppDispatch>();

  // Grab user from Redux store
  const { data: user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogOut = () => {
    Cookies.remove("token");
    toast.success("Successfully Logged out");
    window.location.href = "/";
  };
  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !isAuthenticated) {
      dispatch(fetchUser());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <header className="h-21 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-6 py-2 h-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="AfroVids Logo"
                width={100}
                height={40}
              />
            </Link>
          </div>

          <Link href={"/editor"}>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create Video
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {user?.subscription?.status === "active" ? (
            <Button variant="default" size="sm" disabled>
              <span>{user?.subscription?.plan.toUpperCase()} Plan</span>
              <Crown className="w-4 h-4 ml-1" />
            </Button>
          ) : (
            <Link href={"/subscribe"}>
              <Button variant="default" size="sm">
                <span>Subscribe Now</span>
                <Crown className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          )}

          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar || ""} alt={user?.name || "User"} />
                  <AvatarFallback>
                    {user?.name
                      ? user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                      : "JD"}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium">{user?.name}</p>
                  <p className="w-[200px] truncate text-sm text-muted-foreground">
                    {user?.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <Link href={"/profile"}>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
