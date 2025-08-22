import { DashboardHeader } from "./dashboard-header"
import { DashboardSidebar } from "./dashboard-sidebar"
import { DashboardContent } from "./dashboard-content"

export function UserDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
