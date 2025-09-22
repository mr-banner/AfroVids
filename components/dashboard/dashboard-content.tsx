"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Plus, MoreHorizontal, Eye, Download, Share2, TrendingUp, Clock, Users, Video } from "lucide-react"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"

const recentVideos = [
  {
    id: 1,
    title: "Product Launch Video",
    thumbnail: "/video-thumb-1.png",
    duration: "2:34",
    status: "Published",
    views: 1247,
    createdAt: "2 days ago",
  },
  {
    id: 2,
    title: "Social Media Campaign",
    thumbnail: "/video-thumb-2.png",
    duration: "0:45",
    status: "Draft",
    views: 0,
    createdAt: "1 week ago",
  },
  {
    id: 3,
    title: "Tutorial Series Intro",
    thumbnail: "/video-thumb-3.png",
    duration: "1:12",
    status: "Processing",
    views: 892,
    createdAt: "3 days ago",
  },
  {
    id: 4,
    title: "Brand Story Video",
    thumbnail: "/video-thumb-4.png",
    duration: "3:21",
    status: "Published",
    views: 2156,
    createdAt: "1 week ago",
  },
]

const stats = [
  { label: "Total Videos", value: "47", change: "+12%", icon: Video },
  { label: "Total Views", value: "24.5K", change: "+18%", icon: Eye },
  { label: "Watch Time", value: "156h", change: "+25%", icon: Clock },
  { label: "Engagement", value: "8.2%", change: "+3.1%", icon: Users },
]

export function DashboardContent() {
  const {data} = useSelector(
    (state:RootState) => state.auth
  )
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">{`Welcome back, ${data?.name}`}</h1>
        <p className="text-muted-foreground">Here's what's happening with your video projects today.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span className="text-green-500">{stat.change}</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
              <Plus className="w-6 h-6" />
              <span>Create New Video</span>
            </Button>
            <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
              <Video className="w-6 h-6" />
              <span>Browse Templates</span>
            </Button>
            <Button className="h-20 flex-col gap-2 bg-transparent" variant="outline">
              <TrendingUp className="w-6 h-6" />
              <span>View Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Videos */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Videos</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentVideos.map((video) => (
              <div
                key={video.id}
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="relative w-20 h-12 bg-muted rounded overflow-hidden">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="flex-1 space-y-1">
                  <h3 className="font-medium">{video.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{video.createdAt}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{video.views.toLocaleString()} views</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      video.status === "Published" ? "default" : video.status === "Processing" ? "secondary" : "outline"
                    }
                  >
                    {video.status}
                  </Badge>

                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Storage Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Storage Usage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Used Storage</span>
              <span className="font-medium">2.4 GB / 10 GB</span>
            </div>
            <Progress value={24} className="h-2" />
          </div>
          <p className="text-sm text-muted-foreground">
            You have 7.6 GB of storage remaining. Upgrade your plan for more space.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
