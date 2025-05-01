"use client";

import { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format } from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { fr } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter, PlusCircle } from "lucide-react";

// Initialisation du localisateur pour le calendrier
const locales = { fr };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Données d'événements de démonstration
const events = [
  {
    id: 1,
    title: "Visite de bien - Jean Dupont",
    start: new Date(2025, 3, 10, 10, 0),
    end: new Date(2025, 3, 10, 11, 0),
    type: "visit",
  },
  {
    id: 2,
    title: "Signature de bail - Marie Laurent",
    start: new Date(2025, 3, 12, 14, 0),
    end: new Date(2025, 3, 12, 15, 30),
    type: "signature",
  },
  {
    id: 3,
    title: "Maintenance - Résidence Eiffel",
    start: new Date(2025, 3, 15, 9, 0),
    end: new Date(2025, 3, 15, 12, 0),
    type: "maintenance",
  },
  {
    id: 4,
    title: "Rendez-vous client - Paul Martin",
    start: new Date(2025, 3, 18, 13, 30),
    end: new Date(2025, 3, 18, 14, 30),
    type: "meeting",
  },
  {
    id: 5,
    title: "Échéance de loyer",
    start: new Date(2025, 3, 5, 0, 0),
    end: new Date(2025, 3, 5, 23, 59),
    type: "deadline",
    allDay: true,
  },
];

// Style personnalisé pour les événements
const eventStyleGetter = (event: any) => {
  let style = {
    backgroundColor: "",
    borderRadius: "4px",
    opacity: 0.8,
    color: "white",
    border: "0",
    display: "block",
    fontWeight: "500" as const,
  };

  switch (event.type) {
    case "visit":
      style.backgroundColor = "hsl(var(--chart-1))";
      break;
    case "signature":
      style.backgroundColor = "hsl(var(--chart-2))";
      break;
    case "maintenance":
      style.backgroundColor = "hsl(var(--chart-3))";
      break;
    case "meeting":
      style.backgroundColor = "hsl(var(--chart-4))";
      break;
    case "deadline":
      style.backgroundColor = "hsl(var(--chart-5))";
      break;
    default:
      style.backgroundColor = "hsl(var(--primary))";
  }

  return { style };
};

const messages = {
  allDay: "Toute la journée",
  previous: "Précédent",
  next: "Suivant",
  today: "Aujourd'hui",
  month: "Mois",
  week: "Semaine",
  day: "Jour",
  agenda: "Agenda",
  date: "Date",
  time: "Heure",
  event: "Événement",
  noEventsInRange: "Aucun événement dans cette période",
  showMore: (total: number) => `+ ${total} événement${total !== 1 ? 's' : ''}`
};

export default function CalendarPage() {
  // Ajouter des dates en 2025 pour correspondre aux données de démonstration
  const [date, setDate] = useState(new Date(2025, 3, 1));
  const [view, setView] = useState("month");

  // Composant de barre d'outils personnalisé
  const CustomToolbar = (toolbar: any) => {
    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };

    const goToToday = () => {
      toolbar.onNavigate("TODAY");
    };

    return (
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={goToBack}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="outline" onClick={goToToday}>
            Aujourd&apos;hui
          </Button>
          <Button size="sm" variant="outline" onClick={goToNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <h2 className="text-xl font-bold ml-2">
            {format(toolbar.date, "MMMM yyyy", { locale: fr })}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={view === "month" ? "default" : "outline"}
            onClick={() => setView("month")}
          >
            Mois
          </Button>
          <Button
            size="sm"
            variant={view === "week" ? "default" : "outline"}
            onClick={() => setView("week")}
          >
            Semaine
          </Button>
          <Button
            size="sm"
            variant={view === "day" ? "default" : "outline"}
            onClick={() => setView("day")}
          >
            Jour
          </Button>
          <Button
            size="sm"
            variant="outline"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtres
          </Button>
          <Button size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            Nouvel événement
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendrier</h1>
          <p className="text-muted-foreground mt-1">
            Gérez vos rendez-vous, visites et dates importantes.
          </p>
        </div>
      </div>

      <Card className="p-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          eventPropGetter={eventStyleGetter}
          date={date}
          onNavigate={newDate => setDate(newDate)}
          view={view as any}
          onView={(newView) => setView(newView)}
          components={{
            toolbar: CustomToolbar,
          }}
          messages={messages}
          culture="fr"
        />
      </Card>
    </div>
  );
}