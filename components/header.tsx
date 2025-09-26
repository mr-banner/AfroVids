"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Settings, LogOut, User, CreditCard } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUser } from "@/store/actions/userActions";

interface UserType {
  name: string;
  email: string;
  avatar?: string;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();
  

  const handleLogOut = () => {
    Cookies.remove("token");
    toast.success("Successfully Loggedout");
    window.location.reload();
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && !isAuthenticated) {
      dispatch(fetchUser());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <header className="bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <Image
            src={"/logo.png"}
            alt="AfroVids Logo"
            width={90}
            height={35}
          />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <a
              href="#"
              className="text-md font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="/subscribe"
              className="text-md font-medium hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-md font-medium hover:text-primary transition-colors"
            >
              Help
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {isAuthenticated && (
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex text-md"
              asChild
            >
              <a href="/dashboard">Dashboard</a>
            </Button>
          )}
          {isAuthenticated && (
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent text-md"
              asChild
            >
              <a href="/editor">Open Editor</a>
            </Button>
          )}
          {!isAuthenticated ? (
            <Button size="sm" className="hidden sm:flex text-md" asChild>
              <a href="/auth/login">Sign in</a>
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user?.avatar || ""}
                        alt={user?.name || "User"}
                      />
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
          )}
          {!isAuthenticated && (
            <Button size="sm" className="sm:hidden" asChild>
              <a href="/auth/login">Sign in</a>
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Templates
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Features
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors py-2"
              >
                Help
              </a>
            </nav>
            <div className="flex flex-col gap-3 pt-4 border-t border-border sm:hidden">
              {!isAuthenticated ? (
                <Button variant="ghost" size="sm" asChild>
                  <a href="/auth/login">Login</a>
                </Button>
              ) : (
                <Button variant="ghost" size="sm" asChild>
                  <a href="/auth/login">Logout</a>
                </Button>
              )}
              {isAuthenticated && (
                <Button variant="outline" size="sm" asChild>
                  <a href="/dashboard">Dashboard</a>
                </Button>
              )}
              {isAuthenticated && (
                <Button variant="outline" size="sm" asChild>
                  <a href="/editor">Open Editor</a>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
