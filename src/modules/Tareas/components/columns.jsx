import { ArrowUpDown, Check, X } from "lucide-react"

import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = [
    {
        accessorKey: "titulo",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Título
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
        accessorKey: "responsable",
        header: "Responsable",
    },
    {
        accessorKey: "activo",
        header: "Activo",
        cell: ({ row }) => {
            const value = row.getValue("activo")
            return (
                <div className="text-right font-medium center">
                    {value ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <X className="w-4 h-4 text-red-500" />
                    )}
                </div>
            )
        },
    },
    {
        id: "actions",
        header: "Acciones",
        cell: ({ row }) => {
          const value = row.getValue("activo")
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)} >
                    Activar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                    Desactivar
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]
