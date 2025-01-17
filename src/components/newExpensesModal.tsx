import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, Form, Formik } from "formik";
import { InputNewFrete } from "./inputNewFrete";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { newExpenseSchema } from "@/schemas/newExpensesSchema";

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('pt-BR'); // pt-BR para formato dd/mm/yyyy
};

interface Expense {
  name: string,
  descricao: string; 
  valor: number; 
  data: string; 
}

interface NewExpensesProps {
  listaDespesas: Array<Expense>
}

export default function NewExpense( { listaDespesas } : NewExpensesProps) {

  const initialValues = {
    name: "",
    descricao: "",
    data: "",
    valor: "",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nova despesa +</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-start">Criar nova despesa:</DialogTitle>
          <DialogDescription className="text-start">
            Digite os valores para criar sua nova despesa.
          </DialogDescription>
        </DialogHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={newExpenseSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values)
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              listaDespesas.push(values)
              resetForm()
            }, 400);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="flex flex-col gap-4">
              <InputNewFrete label="Nome da despesa" name="name" type="text" />
              <InputNewFrete label="Descrição" name="descricao" type="text" />
              <InputNewFrete label="Valor" name="valor" type="number" />

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="flex items-center justify-center"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {values.data ? formatDate(new Date(values.data)): <span>Data</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Field name="data" type="text">
                    {({ field, form }: any) => (
                      <div>
                        <div>
                          <Calendar
                            mode="single"
                            selected={
                              field.value ? new Date(field.value) : undefined
                            }
                            onDayClick={(date: Date) =>
                              form.setFieldValue(field.name, date)
                            }
                          />
                        </div>
                      </div>
                    )}
                  </Field>
                </PopoverContent>
              </Popover>

              <Button type="submit" disabled={isSubmitting}>
                Criar +
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
