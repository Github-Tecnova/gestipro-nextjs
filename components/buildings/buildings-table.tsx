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
import { Building, Eye, Home, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data for demonstration
const buildings = [
  {
    id: "1",
    name: "Résidence Les Érables",
    address: "2345 Rue des Érables",
    city: "Montréal",
    postalCode: "H2K 3X4",
    country: "Canada",
    floors: 6,
    totalUnits: 24,
    occupiedUnits: 21,
    maintenanceRequests: 3
  },
  {
    id: "2",
    name: "Complexe du Vieux-Port",
    address: "102 Rue de la Commune Ouest",
    city: "Montréal",
    postalCode: "H2Y 2E2",
    country: "Canada",
    floors: 4,
    totalUnits: 16,
    occupiedUnits: 12,
    maintenanceRequests: 1
  },
  {
    id: "3",
    name: "Le Manoir Champlain",
    address: "15 Avenue de la Montagne",
    city: "Québec",
    postalCode: "G1R 5J6",
    country: "Canada",
    floors: 3,
    totalUnits: 9,
    occupiedUnits: 9,
    maintenanceRequests: 2
  },
  {
    id: "4",
    name: "Les Jardins de Laval",
    address: "890 Boulevard des Laurentides",
    city: "Laval",
    postalCode: "H7G 2V8",
    country: "Canada",
    floors: 5,
    totalUnits: 20,
    occupiedUnits: 15,
    maintenanceRequests: 4
  },
  {
    id: "5",
    name: "Le Carré du Plateau",
    address: "66 Avenue du Mont-Royal Est",
    city: "Montréal",
    postalCode: "H2T 1N5",
    country: "Canada",
    floors: 4,
    totalUnits: 12,
    occupiedUnits: 11,
    maintenanceRequests: 0
  }
];


export function BuildingsTable() {
  function calculateOccupancyRate(occupied: number, total: number) {
    return Math.round((occupied / total) * 100);
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Building</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Occupancy</TableHead>
            <TableHead className="text-center">Maintenance</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {buildings.map((building) => {
            const occupancyRate = calculateOccupancyRate(building.occupiedUnits, building.totalUnits);
            
            return (
              <TableRow key={building.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">
                        {building.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {building.floors} floors
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-sm">{building.address}</span>
                    <span className="text-sm text-muted-foreground">
                      {building.postalCode} {building.city}, {building.country}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5">
                    <Home className="h-4 w-4 text-muted-foreground" />
                    <span>{building.occupiedUnits}/{building.totalUnits}</span>
                  </div>
                </TableCell>
                <TableCell className="max-w-[150px]">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{occupancyRate}%</span>
                    </div>
                    <Progress value={occupancyRate} className="h-2" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {building.maintenanceRequests > 0 ? (
                    <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                      {building.maintenanceRequests} requests
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      No issues
                    </Badge>
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
                        Edit building
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Home className="mr-2 h-4 w-4" />
                        View units
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash className="mr-2 h-4 w-4" />
                        Delete building
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