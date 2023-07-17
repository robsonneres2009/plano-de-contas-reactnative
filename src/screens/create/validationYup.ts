import * as yup from 'yup';

export const SchemaYup = yup.object().shape({
  principal: yup.string(),
  id: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^\d{1,3}(?:\.\d{1,3})*$/,
      'Formato inválido, Cada nivel tem limite de 999 Exemplo: 9.9.9.9.999',
    ),
  nome: yup.string().required('Campo obrigatório'),
  tipo: yup.string().required('Campo obrigatório'),
  aceitaLancamento: yup.string().required('Campo obrigatório'),
});
