import { Field } from "formik";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputNewFreteProps {
  label: string;
  name: string;
  type: string;
}

export function InputNewFrete({ label, name, type }: InputNewFreteProps) {
  return (
    <div>
      <Label>{label}:</Label>
      <Field name={name} type={type}>
        {({ field, form }: any) => (
          <div className="flex flex-col gap-2">
            <Input {...field} id={name} type={type}/>

            {form.touched[name] && form.errors[name] && (
              <div className="text-red-500 text-sm">{form.errors[name]}</div>
            )}
          </div>
        )}
      </Field>
    </div>
  );
}
