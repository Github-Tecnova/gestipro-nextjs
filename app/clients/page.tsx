import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { ClientsTable } from "@/components/clients/clients-table";
import { AddItemDialog } from "@/components/dialogs/add-item-dialog";

export default function ClientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
          <p className="text-muted-foreground mt-1">
            Gérez votre portefeuille clients et leurs relations.
          </p>
        </div>
        <AddItemDialog type="client" />
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher des clients..."
            className="pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="mr-2 h-4 w-4" />
          Filtres
        </Button>
      </div>

      <ClientsTable />
    </div>
  );
}