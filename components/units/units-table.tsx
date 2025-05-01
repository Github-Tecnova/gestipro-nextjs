"use client";

import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Eye, FileText, Home, MoreHorizontal, Pencil, Trash, User, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
const units = [
  {
    id: "U-101",
    reference: "Apt 201",
    type: "T3",
    area: 75.5,
    floor: 2,
    status: "occupied",
    buildingName: "Résidence Les Fleurs",
    buildingId: "1",
    tenant: "Jean Dupont",
    tenantId: "1",
    rent: 950,
    leaseEnd: "2026-06-30",
    maintenanceRequests: 1
  },
  {
    id: "U-102",
    reference: "Apt 104",
    type: "T2",
    area: 52.0,
    floor: 1,
    status: "occupied",
    buildingName: "Résidence Eiffel",
    buildingId: "2",
    tenant: "Marie Laurent",
    tenantId: "2",
    rent: 750,
    leaseEnd: "2025-12-15",
    maintenanceRequests: 1
  },
  {
    id: "U-103",
    reference: "Apt 304",
    type: "T4",
    area: 98.3,
    floor: 3,
    status: "occupied",
    buildingName: "Le Carré des Arts",
    buildingId: "5",
    tenant: "Thomas Petit",
    tenantId: "5",
    rent: 1200,
    leaseEnd: "2026-02-28",
    maintenanceRequests: 1
  },
  {
    id: "U-104",
    reference: "Apt 203",
    type: "T3",
    area: 72.0,
    floor: 2,
    status: "occupied",
    buildingName: "Les Jardins de Marseille",
    buildingId: "4",
    tenant: "Sophie Bernard",
    tenantId: "4",
    rent: 900,
    leaseEnd: "2025-09-30",
    maintenanceRequests: 1
  },
  {
    id: "U-105",
    reference: "Apt 105",
    type: "T1",
    area: 35.2,
    floor: 1,
    status: "available",
    buildingName: "Le Clos Saint-Michel",
    buildingId: "3",
    tenant: null,
    tenantId: null,
    rent: 550,
    leaseEnd: null,
    maintenanceRequests: 0
  }
];

export function UnitsTable() {
  function getStatusBadge(status: string) {
    switch(status) {
      case 'occupied':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Occupied</Badge>;
      case 'available':
        return <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Available</Badge>;
      case 'reserved':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">Reserved</Badge>;
      case 'maintenance':
        return <Badge variant="outline" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">Maintenance</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  }

  function formatDate(dateString: string | null) {
    if (!dateString) return "N/A";
    
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  function formatCurrency(amount: number) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Unit</TableHead>
            <TableHead>Building</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Rent</TableHead>
            <TableHead>Lease Ends</TableHead>
            <TableHead className="text-center">Requests</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {units.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                    <Home className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      {unit.reference}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {unit.type} • {unit.area} m² • Floor {unit.floor}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                {unit.buildingName}
              </TableCell>
              <TableCell>
                {getStatusBadge(unit.status)}
              </TableCell>
              <TableCell>
                {unit.tenant ? (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{unit.tenant}</span>
                  </div>
                ) : (
                  <span className="text-muted-foreground">No tenant</span>
                )}
              </TableCell>
              <TableCell>
                {formatCurrency(unit.rent)}
              </TableCell>
              <TableCell>
                {formatDate(unit.leaseEnd)}
              </TableCell>
              <TableCell className="text-center">
                {unit.maintenanceRequests > 0 ? (
                  <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                    {unit.maintenanceRequests}
                  </Badge>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit unit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      View lease
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Wrench className="mr-2 h-4 w-4" />
                      Maintenance requests
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete unit
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}