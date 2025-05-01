"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Filter, 
  MoreHorizontal, 
  PlusCircle, 
  Search, 
  Building,
  CheckCircle,
  HelpCircle,
  XCircle,
  AlertTriangle,
  Wrench
} from "lucide-react";
import { Input } from "@/components/ui/input";

const requests = [
  {
    id: "REQ-001",
    type: "repair",
    title: "Robinet de salle de bain qui fuit",
    description: "Fuite d'eau continue du robinet de la salle de bain principale.",
    status: "new",
    priority: "medium",
    clientName: "Jean Dupont",
    clientId: "1",
    unitReference: "Apt 201",
    buildingName: "Résidence Les Érables",
    createdAt: "2025-04-06T09:30:00Z",
  },
  {
    id: "REQ-002",
    type: "maintenance",
    title: "Stores cassés",
    description: "Les stores du salon sont bloqués et ne peuvent pas être manipulés.",
    status: "in_progress",
    priority: "low",
    clientName: "Marie Laurent",
    clientId: "2",
    unitReference: "Apt 104",
    buildingName: "Complexe du Vieux-Port",
    createdAt: "2025-04-05T14:15:00Z",
  },
  {
    id: "REQ-003",
    type: "renovation",
    title: "Remplacement des placards de cuisine",
    description: "Le client demande le remplacement des vieux placards de cuisine. Budget approuvé.",
    status: "in_progress",
    priority: "high",
    clientName: "Thomas Petit",
    clientId: "5",
    unitReference: "Apt 304",
    buildingName: "Le Carré du Plateau",
    createdAt: "2025-04-04T11:45:00Z",
  },
  {
    id: "REQ-004",
    type: "emergency",
    title: "Dégât des eaux de l'appartement du dessus",
    description: "Fuite d'eau au plafond, semble provenir de l'unité au-dessus. Inspection urgente nécessaire.",
    status: "new",
    priority: "urgent",
    clientName: "Sophie Bernard",
    clientId: "4",
    unitReference: "Apt 203",
    buildingName: "Les Jardins de Laval",
    createdAt: "2025-04-06T08:10:00Z",
  },
  {
    id: "REQ-005",
    type: "repair",
    title: "Chauffage ne fonctionne pas",
    description: "Le système de chauffage ne produit pas de chaleur malgré un thermostat correctement réglé.",
    status: "completed",
    priority: "high",
    clientName: "Paul Martin",
    clientId: "3",
    unitReference: "Apt 105",
    buildingName: "Le Clos Saint-Michel",
    createdAt: "2025-04-02T13:20:00Z",
  },
  {
    id: "REQ-006",
    type: "maintenance",
    title: "Maintenance annuelle CVC",
    description: "Maintenance annuelle programmée du système CVC.",
    status: "completed",
    priority: "medium",
    clientName: "Jean Dupont",
    clientId: "1",
    unitReference: "Apt 201",
    buildingName: "Résidence Les Fleurs",
    createdAt: "2025-04-01T10:00:00Z",
  }
];

export default function RequestsPage() {
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredRequests = activeTab === "all" 
    ? requests 
    : requests.filter(request => request.status === activeTab);

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  function getInitials(name: string) {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  }

  function getPriorityBadge(priority: string) {
    switch(priority) {
      case 'urgent':
        return <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Urgent</Badge>;
      case 'high':
        return <Badge variant="outline" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">Haute</Badge>;
      case 'medium':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">Moyenne</Badge>;
      case 'low':
        return <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Basse</Badge>;
      default:
        return <Badge variant="outline">Inconnue</Badge>;
    }
  }

  function getStatusIcon(status: string) {
    switch(status) {
      case 'new':
        return <HelpCircle className="h-5 w-5 text-blue-500" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <HelpCircle className="h-5 w-5" />;
    }
  }

  function getTypeIcon(type: string) {
    switch(type) {
      case 'repair':
        return <Wrench className="h-4 w-4" />;
      case 'maintenance':
        return <Building className="h-4 w-4" />;
      case 'renovation':
        return <Building className="h-4 w-4" />;
      case 'emergency':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <HelpCircle className="h-4 w-4" />;
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Demandes de maintenance</h1>
          <p className="text-muted-foreground mt-1">
            Gérez les demandes de maintenance et de réparation.
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nouvelle demande
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher des demandes..."
            className="pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="mr-2 h-4 w-4" />
          Filtres
        </Button>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">Toutes les demandes</TabsTrigger>
          <TabsTrigger value="new">Nouvelles</TabsTrigger>
          <TabsTrigger value="in_progress">En cours</TabsTrigger>
          <TabsTrigger value="completed">Terminées</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(request.status)}
                      <CardTitle className="text-lg">{request.title}</CardTitle>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Ouvrir le menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Voir les détails</DropdownMenuItem>
                        <DropdownMenuItem>Modifier la demande</DropdownMenuItem>
                        <DropdownMenuItem>Changer le statut</DropdownMenuItem>
                        <DropdownMenuItem>Supprimer la demande</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription className="flex items-center gap-1.5">
                    {getTypeIcon(request.type)}
                    <span className="capitalize">{
                      request.type === 'repair' ? 'Réparation' :
                      request.type === 'maintenance' ? 'Maintenance' :
                      request.type === 'renovation' ? 'Rénovation' :
                      request.type === 'emergency' ? 'Urgence' :
                      request.type
                    }</span>
                    <span className="mx-1.5">•</span>
                    <span>{request.id}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {request.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {request.buildingName}, {request.unitReference}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between items-center border-t">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="text-xs">
                        {getInitials(request.clientName)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{request.clientName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(request.priority)}
                    <span className="text-xs text-muted-foreground">
                      {formatDate(request.createdAt)}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}