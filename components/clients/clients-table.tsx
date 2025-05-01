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
import { Eye, FileText, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for demonstration
const clients = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Dupont",
    email: "jean.dupont@example.com",
    phone: "+1 514 123 4567",
    status: "active",
    properties: 2,
    contracts: 1,
    lastContact: "2023-04-15T10:30:00Z"
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Laurent",
    email: "marie.laurent@example.com",
    phone: "+1 418 234 5678",
    status: "active",
    properties: 1,
    contracts: 1,
    lastContact: "2023-04-12T14:45:00Z"
  },
  {
    id: "3",
    firstName: "Paul",
    lastName: "Martin",
    email: "paul.martin@example.com",
    phone: "+1 438 345 6789",
    status: "prospective",
    properties: 0,
    contracts: 0,
    lastContact: "2023-04-10T09:15:00Z"
  },
  {
    id: "4",
    firstName: "Sophie",
    lastName: "Bernard",
    email: "sophie.bernard@example.com",
    phone: "+1 581 456 7890",
    status: "inactive",
    properties: 0,
    contracts: 1,
    lastContact: "2023-03-25T16:20:00Z"
  },
  {
    id: "5",
    firstName: "Thomas",
    lastName: "Petit",
    email: "thomas.petit@example.com",
    phone: "+1 819 567 8901",
    status: "active",
    properties: 1,
    contracts: 1,
    lastContact: "2023-04-08T11:30:00Z"
  }
];


export function ClientsTable() {
  function getInitials(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  function getStatusColor(status: string) {
    switch(status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'prospective':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'inactive':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Properties</TableHead>
            <TableHead className="text-center">Contracts</TableHead>
            <TableHead>Last Contact</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {getInitials(client.firstName, client.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {client.firstName} {client.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ID: {client.id}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="text-sm">{client.email}</span>
                  <span className="text-sm text-muted-foreground">{client.phone}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="outline" 
                  className={`${getStatusColor(client.status)} capitalize`}
                >
                  {client.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                {client.properties}
              </TableCell>
              <TableCell className="text-center">
                {client.contracts}
              </TableCell>
              <TableCell>
                {formatDate(client.lastContact)}
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
                      Edit client
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      View documents
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete client
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