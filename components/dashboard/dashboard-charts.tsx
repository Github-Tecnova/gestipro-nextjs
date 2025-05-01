"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

const monthlyData = [
  { name: "Jan", revenue: 18500, occupancy: 82 },
  { name: "Fév", revenue: 19200, occupancy: 85 },
  { name: "Mar", revenue: 18900, occupancy: 84 },
  { name: "Avr", revenue: 19800, occupancy: 87 },
  { name: "Mai", revenue: 20500, occupancy: 89 },
  { name: "Juin", revenue: 21000, occupancy: 91 },
  { name: "Juil", revenue: 21200, occupancy: 92 },
  { name: "Août", revenue: 21500, occupancy: 93 },
  { name: "Sep", revenue: 22000, occupancy: 94 },
  { name: "Oct", revenue: 22500, occupancy: 95 },
  { name: "Nov", revenue: 23000, occupancy: 94 },
  { name: "Déc", revenue: 23500, occupancy: 93 },
];

const propertyTypeData = [
  { name: "Appartements", value: 45 },
  { name: "Maisons", value: 25 },
  { name: "Commercial", value: 15 },
  { name: "Industriel", value: 10 },
  { name: "Terrain", value: 5 },
];

export function DashboardCharts() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Analytiques</CardTitle>
        <CardDescription>
          Métriques mensuelles de performance du portefeuille
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue">
          <TabsList className="mb-4">
            <TabsTrigger value="revenue">Revenus</TabsTrigger>
            <TabsTrigger value="occupancy">Occupation</TabsTrigger>
            <TabsTrigger value="property-types">Types de biens</TabsTrigger>
          </TabsList>
          <TabsContent value="revenue">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenus ($)"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="occupancy">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="occupancy"
                  name="Occupation (%)"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="property-types">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={propertyTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="value"
                  name="Biens (%)"
                  fill="hsl(var(--chart-3))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}