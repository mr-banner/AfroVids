"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  User,
  MapPin,
  Calendar,
  Edit3,
  Video,
  Clock,
  Award,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { updateUser } from "@/store/actions/userActions";

interface UserType {
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  location?: string;
  bio?: string;
  updatedAt?: string;
  subscription?: SubscriptionType;
}
interface SubscriptionType {
  plan: "basic" | "pro" | "premium";
  stripeSubscriptionId: string;
  videoLimit: number;
  status: "active" | "inactive";
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
}

export default function ProfilePage() {
  const dispatch = useDispatch<AppDispatch>()
  const {data:user, loading,} = useSelector(
    (state: RootState) => state.auth
  )

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
  });


  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || "",
        email: user?.email || "",
        phone: user?.phone || "",
        location: user?.location || "",
        bio: user?.bio || "",
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleUpdate = async () => {
    await dispatch(updateUser(formData));
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
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
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold text-balance">{user?.name}</h1>
              <Badge
                variant="secondary"
                className="w-fit mx-auto md:mx-0 bg-green-100 text-green-800"
              >
                {user?.subscription?.plan
                  ? user.subscription.plan.charAt(0).toUpperCase() +
                    user.subscription.plan.slice(1) + " " + "Plan"
                  : "Free"}
              </Badge>
            </div>

            <p className="text-muted-foreground mb-4 text-pretty">
              {user?.bio}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{user?.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>
                  Joined on:
                  {user?.updatedAt
                    ? new Date(user.updatedAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Video className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <div className="text-2xl font-bold">47</div>
              <div className="text-sm text-muted-foreground">
                Videos Created
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-red-600" />
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-muted-foreground">Hours Saved</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Award className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
              <div className="text-2xl font-bold">12.5K</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <User className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <div className="text-2xl font-bold">89%</div>
              <div className="text-sm text-muted-foreground">
                Engagement Rate
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Update your personal details and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300"
                />
              </div>

              <Button
                onClick={handleUpdate}
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Edit3 className="w-4 h-4 mr-2" />
                )}
                {loading ? "Updating Info..." : "Update profile"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account preferences and security
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Subscription</h4>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">AfroVids Pro</div>
                    <div className="text-sm text-muted-foreground">
                      $29/month
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-3">Preferences</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email notifications</span>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto-save projects</span>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Cultural voice preference</span>
                    <Button variant="outline" size="sm">
                      Caribbean
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-3">Security</h4>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    Change Password
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    Two-Factor Authentication
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    Download My Data
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
