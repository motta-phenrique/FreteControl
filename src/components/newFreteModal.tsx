import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Field, Form, Formik } from "formik";
import { InputNewFrete } from "./inputNewFrete";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "./ui/calendar";
import { Label } from "@radix-ui/react-label";
import { newFreteSchema } from "@/schemas/newFreteSchema";

export default function NewFreteModal() {
  const initialValues = {
    cliente: "",
    descricao: "",
    data: "",
    valor: "",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Novo Frete</Button>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-start">Criar novo frete:</DialogTitle>
          <DialogDescription className="text-start">
            Digite os valores para criar seu novo frete.
          </DialogDescription>
        </DialogHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={newFreteSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="flex flex-col gap-4">
              <InputNewFrete label="Cliente" name="cliente" type="text" />
              <InputNewFrete label="Descrição" name="descricao" type="text" />
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="flex items-center justify-center"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {values.data ? "selecionei" : <span>Data</span>}
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

              <InputNewFrete label="Valor" name="valor" type="number" />

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
