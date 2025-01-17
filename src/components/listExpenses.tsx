import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";
import { expense } from "@/utils/expenses";
import { formatDate } from "./newExpensesModal";

interface Expense {
  // id: number;
  name: string;
  descricao: string;
  valor: number;
  data: Date;
}

interface ListExpensesProps {
  id: number;
  listaDespesas: Array<Expense>;
}

export default function ListExpenses({ id, listaDespesas }: ListExpensesProps) {
  return (
      <div className="overflow-y-scroll max-h-72 p-2">
        <ul className="list-disc [&>li]:mt-2 flex flex-col gap-1">
          {listaDespesas.map((expense, index) => (
            <li key={index} className="border rounded-lg p-2 w-full">
              <Collapsible>
                <CollapsibleTrigger className="w-full flex justify-between items-center">
                  {expense.name} <ChevronDownIcon />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2 w-full">
                  <ul className="border-t py-2 list-none">
                    <li>Valor: {expense.valor}</li>
                    <li>Data: {formatDate(expense.data)}</li>
                    <li>Descrição: {expense.descricao}</li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </li>
          ))}
        </ul>
      </div>
  );
}
