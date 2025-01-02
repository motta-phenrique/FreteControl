"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Button } from "../ui/button";
import NewExpense from "../newExpensesModal";
import ListExpenses from "../listExpenses";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [selectedRow, setSelectedRow] = useState(null);

  // @ts-ignore
  const handleRowClick = (row) => {
    // @ts-ignore
    setSelectedRow((prevRow) => (prevRow?.id === row.id ? null : row));
  };

  return (
    <div className="rounded-md w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headergroup) => (
            <TableRow key={headergroup.id}>
              {headergroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                onClick={() => handleRowClick(row)}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {selectedRow && (
        <Dialog open={!!selectedRow} onOpenChange={() => setSelectedRow(null)}>
          <DialogContent className="max-w-sm rounded-lg">
            <DialogHeader>
              <DialogTitle>Detalhes do Cliente</DialogTitle>
              <DialogDescription>
                Informações detalhadas sobre o cliente selecionado.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-2">
              <p>
                <strong>Cliente:</strong> {" "} { 
                // @ts-ignore 
                selectedRow.getValue("cliente")
                }
              </p>
              <p>
                <strong>Total despesas:</strong>{" "}
                {
                // @ts-ignore
                selectedRow.getValue("despesas")
                }
              </p>
              <p>
                <strong>Data:</strong>{" "} 
                {
                // @ts-ignore
                selectedRow.getValue("data")
                }
              </p>
              <p>
                <strong>Valor:</strong>{" "}
                {
                // @ts-ignore
                selectedRow.getValue("valor")
                }
              </p>
              <p>
                <strong>Líquido:</strong>{" "}
                {
                // @ts-ignore
                selectedRow.getValue("valor") - selectedRow.getValue("despesas")
                }
              </p>
            </div>

            <NewExpense />

            <ListExpenses />
            <DialogFooter>
              <DialogClose asChild>
                <Button className="px-4 py-2 w-full text-white rounded">
                  Fechar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
