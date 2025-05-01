import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tableau de bord</h1>
        <p className="text-muted-foreground mt-1">
          Aperçu de votre portefeuille immobilier et de vos activités.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Ajouter un bien
        </Button>
      </div>
    </div>
  );
}