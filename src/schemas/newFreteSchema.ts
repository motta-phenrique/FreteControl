import * as Yup from "yup"

export const newFreteSchema = Yup.object().shape({
  cliente: Yup.string().min(3, "Nome do cliente curto.").required("Campo obrigatório"),
  descricao: Yup.string().min(10, "Descrição muito curta").max(50, "Descrição muito longa.").required("Campo obrigatório"),
  data: Yup.string().required("Campo obrigatório"),
  valor: Yup.number().positive("Valor precisa ser maior que 0").required("Campo obrigatório")
})