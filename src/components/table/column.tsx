"use cliente";

import { ColumnDef } from "@tanstack/react-table";

interface Frete {
  id: number;
  cliente: string;
  despesas: number;
  data: string;
  valor: number;
  listaDespesas: []
}

export const fretes : Frete[] = [
  {
    id: 1,
    cliente: "Cocari",
    despesas: 1200,
    data: "05/10/2025",
    valor: 5000,
    listaDespesas: []
  },
  {
    id: 2,
    cliente: "Agronorte",
    despesas: 800,
    data: "10/10/2025",
    valor: 3200,
    listaDespesas: []
  },
  {
    id: 3,
    cliente: "Cooperativa Sul",
    despesas: 1000,
    data: "12/10/2025",
    valor: 4500,
    listaDespesas: []
  },
  {
    id: 4,
    cliente: "TransCargo",
    despesas: 500,
    data: "15/10/2025",
    valor: 0,
    listaDespesas: []
  },
  {
    id: 5,
    cliente: "Carga Fácil",
    despesas: 2000,
    data: "20/10/2025",
    valor: 6000,
    listaDespesas: []
  },
];

export const columns: ColumnDef<Frete>[] = [

  {
    accessorKey: "id",
    header: "Id"
  },

  {
    accessorKey: "cliente",
    header: "Cliente",
    cell: ({row}) => {
      const cliente = row.getValue("cliente") as string

      return <div className="">{cliente}</div>
    }
  },

  {
    accessorKey: "data",
    header: "Data"
  },

  {
    accessorKey: "despesas",
    header: "Despesas"
  },

  {
    accessorKey: "valor",
    header: "Valor"
  },

  {
    accessorKey: "listaDespesas",
    header: "Lista de Despesas",
  },
];
