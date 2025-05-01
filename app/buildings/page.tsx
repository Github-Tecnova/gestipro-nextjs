"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { BuildingsTable } from "@/components/buildings/buildings-table";
import { AddItemDialog } from "@/components/dialogs/add-item-dialog";

export default function BuildingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bâtiments</h1>
          <p className="text-muted-foreground mt-1">
            Gérez votre portefeuille immobilier.
          </p>
        </div>
        <AddItemDialog type="building" />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher des bâtiments..."
            className="pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="mr-2 h-4 w-4" />
          Filtres
        </Button>
      </div>

      <BuildingsTable />
    </div>
  );
}