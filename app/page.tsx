import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardCharts } from '@/components/dashboard/dashboard-charts';
import { RecentActivity } from '@/components/dashboard/recent-activity';
import { Overview } from '@/components/dashboard/overview';

export default function Home() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Overview />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="md:col-span-2 lg:col-span-4">
          <DashboardCharts />
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}