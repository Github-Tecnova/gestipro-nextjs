"use client";

import { 
  Building, 
  Home, 
  Users, 
  FileText, 
  AlertTriangle,
  TrendingUp,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const overviewData = [
  {
    title: "Total des biens",
    value: "42",
    change: "+2.5%",
    increasing: true,
    icon: Building,
    iconColor: "text-chart-1",
    description: "Biens actifs dans le portefeuille"
  },
  {
    title: "Unités disponibles",
    value: "15",
    change: "-3.2%",
    increasing: false,
    icon: Home,
    iconColor: "text-chart-2",
    description: "Unités prêtes à louer"
  },
  {
    title: "Clients actifs",
    value: "128",
    change: "+4.3%",
    increasing: true,
    icon: Users,
    iconColor: "text-chart-3",
    description: "Clients avec des baux actifs"
  },
  {
    title: "Demandes ouvertes",
    value: "7",
    change: "-12.5%",
    increasing: false,
    icon: AlertTriangle,
    iconColor: "text-chart-4",
    description: "Demandes de maintenance à traiter"
  }
];

export function Overview() {
  return (
    <>
      {overviewData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              {item.title}
            </CardTitle>
            <item.icon className={cn("h-4 w-4", item.iconColor)} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="flex items-center pt-1">
              {item.increasing ? (
                <ArrowUp className="mr-1 h-4 w-4 text-emerald-500" />
              ) : (
                <ArrowDown className="mr-1 h-4 w-4 text-rose-500" />
              )}
              <p className={cn(
                "text-xs",
                item.increasing ? "text-emerald-500" : "text-rose-500"
              )}>
                {item.change}
              </p>
              <p className="text-xs text-muted-foreground ml-auto">
                {item.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}