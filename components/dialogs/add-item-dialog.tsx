"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { AddItemForm } from "@/components/forms/add-item-form";
import { useState } from "react";

interface AddItemDialogProps {
  type: "client" | "lease" | "unit" | "building";
  trigger?: React.ReactNode;
}

export function AddItemDialog({ type, trigger }: AddItemDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = async (data: any) => {
    // TODO: Implement form submission
    console.log("Form submitted:", data);
    setOpen(false);
  };

  const titles = {
    client: "Nouveau Client",
    lease: "Nouveau Bail",
    unit: "Nouvelle Unité",
    building: "Nouveau Bâtiment"
  };

  const descriptions = {
    client: "Ajouter un nouveau client",
    lease: "Créer un nouveau contrat de location",
    unit: "Ajouter une nouvelle unité de logement",
    building: "Ajouter un nouveau bâtiment"
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            {titles[type]}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{titles[type]}</DialogTitle>
          <DialogDescription>
            {descriptions[type]}
          </DialogDescription>
        </DialogHeader>
        <AddItemForm
          type={type}
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}