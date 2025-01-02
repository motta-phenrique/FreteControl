import * as Yup from "yup"

export const newExpenseSchema = Yup.object().shape({
  name: Yup.string().min(3, "Nome de despesa muito pequeno").required("Campo obrigatório"),
  descricao: Yup.string().min(3, "Descrição muito pequena").required("Campo obrigatório"),
  valor: Yup.number().positive("Valor precisa ser maior que 0").required("Campo obrigatório")
})