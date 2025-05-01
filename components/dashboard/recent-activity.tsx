"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Home, User, Wrench, Calendar, FileText } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "lease",
    title: "Nouveau bail signé",
    description: "Jean Dupont a signé un bail pour l'Appartement 201",
    timestamp: "Il y a 35 minutes",
    icon: FileText,
    iconBg: "bg-blue-100 dark:bg-blue-900",
    iconColor: "text-blue-500"
  },
  {
    id: 2,
    type: "maintenance",
    title: "Demande de maintenance",
    description: "Problème de plomberie signalé dans le Bâtiment B, Unité 105",
    timestamp: "Il y a 2 heures",
    icon: Wrench,
    iconBg: "bg-amber-100 dark:bg-amber-900",
    iconColor: "text-amber-500"
  },
  {
    id: 3,
    type: "client",
    title: "Nouveau client",
    description: "Marie Laurent s'est inscrite comme nouvelle cliente",
    timestamp: "Il y a 4 heures",
    icon: User,
    iconBg: "bg-green-100 dark:bg-green-900",
    iconColor: "text-green-500"
  },
  {
    id: 4,
    type: "property",
    title: "Bien disponible",
    description: "L'unité 304 de la Résidence Eiffel est maintenant disponible",
    timestamp: "Hier",
    icon: Home,
    iconBg: "bg-purple-100 dark:bg-purple-900",
    iconColor: "text-purple-500"
  },
  {
    id: 5,
    type: "appointment",
    title: "Visite programmée",
    description: "Visite à 14h30 pour l'Avenue Victor Hugo",
    timestamp: "Hier",
    icon: Calendar,
    iconBg: "bg-indigo-100 dark:bg-indigo-900",
    iconColor: "text-indigo-500"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité récente</CardTitle>
        <CardDescription>
          Dernières mises à jour de votre portefeuille
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-4 rounded-lg transition-all"
            >
              <div className={`${activity.iconBg} p-2 rounded-full mt-0.5`}>
                <activity.icon className={`h-4 w-4 ${activity.iconColor}`} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}