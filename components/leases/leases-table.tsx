"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Eye, FileText, Home, MoreHorizontal, Pencil, Trash, User, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Données fictives à titre de démonstration
const leases = [
  {
    id: "L-001",
    clientName: "Jean Dupont",
    clientId: "1",
    unitReference: "Apt 201",
    unitId: "U-101",
    buildingName: "Résidence Les Érables",
    buildingId: "1",
    startDate: "2023-07-01",
    endDate: "2026-06-30",
    rent: 1150,
    expenses: 120,
    status: "active",
    documents: 3
  },
  {
    id: "L-002",
    clientName: "Marie Laurent",
    clientId: "2",
    unitReference: "Apt 104",
    unitId: "U-102",
    buildingName: "Complexe du Vieux-Port",
    buildingId: "2",
    startDate: "2022-12-15",
    endDate: "2025-12-15",
    rent: 1300,
    expenses: 140,
    status: "active",
    documents: 2
  },
  {
    id: "L-003",
    clientName: "Thomas Petit",
    clientId: "5",
    unitReference: "Apt 304",
    unitId: "U-103",
    buildingName: "Le Carré du Plateau",
    buildingId: "5",
    startDate: "2023-03-01",
    endDate: "2026-02-28",
    rent: 1450,
    expenses: 160,
    status: "active",
    documents: 2
  },
  {
    id: "L-004",
    clientName: "Sophie Bernard",
    clientId: "4",
    unitReference: "Apt 203",
    unitId: "U-104",
    buildingName: "Les Jardins de Laval",
    buildingId: "4",
    startDate: "2022-10-01",
    endDate: "2025-09-30",
    rent: 975,
    expenses: 100,
    status: "active",
    documents: 3
  },
  {
    id: "L-005",
    clientName: "Paul Martin",
    clientId: "3",
    unitReference: "Apt 105",
    unitId: "U-105",
    buildingName: "Le Manoir Champlain",
    buildingId: "3",
    startDate: "2022-05-01",
    endDate: "2023-04-30",
    rent: 895,
    expenses: 90,
    status: "terminated",
    documents: 4
  }
];

export function LeasesTable() {
  function getInitials(name: string) {
    return name
        .split(' ')
        .map(part => part.charAt(0).toUpperCase())
        .join('');
  }

  function getStatusBadge(status: string) {
    switch(status) {
      case 'active':
        return <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Actif</Badge>;
      case 'pending':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">En attente</Badge>;
      case 'terminated':
        return <Badge variant="outline" className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Terminé</Badge>;
      default:
        return <Badge variant="outline">Inconnu</Badge>;
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-CA', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat('fr-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  function calculateMonthsRemaining(endDate: string) {
    const end = new Date(endDate);
    const now = new Date();
    let months = (end.getFullYear() - now.getFullYear()) * 12;
    months -= now.getMonth();
    months += end.getMonth();
    return months <= 0 ? 0 : months;
  }

  return (
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Locataire</TableHead>
              <TableHead>Propriété</TableHead>
              <TableHead>Durée</TableHead>
              <TableHead>Loyer</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead className="text-center">Docs</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leases.map((lease) => {
              const monthsRemaining = calculateMonthsRemaining(lease.endDate);

              return (
                  <TableRow key={lease.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {getInitials(lease.clientName)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {lease.clientName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Bail ID : {lease.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p>{lease.unitReference}</p>
                          <p className="text-sm text-muted-foreground">{lease.buildingName}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm">
                          {formatDate(lease.startDate)} à {formatDate(lease.endDate)}
                        </p>
                        {lease.status === 'active' && (
                            <p className="text-xs text-muted-foreground">
                              {monthsRemaining} mois restants
                            </p>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium">{formatCurrency(lease.rent)}</p>
                        <p className="text-xs text-muted-foreground">
                          +{formatCurrency(lease.expenses)} charges
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(lease.status)}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline">
                        <FileText className="mr-1 h-3 w-3" />
                        {lease.documents}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Ouvrir le menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            Voir les détails
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Pencil className="mr-2 h-4 w-4" />
                            Modifier le bail
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            Gérer les documents
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            Voir le locataire
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Home className="mr-2 h-4 w-4" />
                            Voir la propriété
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {lease.status === 'active' && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Terminer le bail
                              </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Supprimer le bail
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
  );
}
