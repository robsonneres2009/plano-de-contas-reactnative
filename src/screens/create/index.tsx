import { useCallback, useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useFormik } from "formik";
import Card from "../../components/card";
import Input from "../../components/input";
import Select from "../../components/select";
import style from "./styled";
import { ExpensesContext, ExpensesData } from "../../hooks/useExpenses";
import { useNavigation, RouteProp } from "@react-navigation/native";
import MessageError from "../../components/messageError";
import { SchemaYup } from "./validationYup";
import Header from "../../components/header";
import { RootStackParamList } from "../home/types";

type CreateScreenRouteProp = RouteProp<RootStackParamList, "Create">;

export default function Create({ route }: { route: CreateScreenRouteProp }) {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const {
    expenses,
    addExpense,
    generateNewCode,
    findLevelExpense,
    findMainExpense,
  } = useContext(ExpensesContext);
  const [OptionsMain, setOptionMain] = useState([] as any[]);
  const [modeView, setModeView] = useState(false);

  useEffect(() => {
    convertingExpensesToOptions();
    if (route.params.id) {
      const id = route.params.id;
      const expense = findLevelExpense(id);

      formik.setFieldValue("id", expense?.id);
      formik.setFieldValue(
        "aceitaLancamento",
        expense?.aceitaLancamento ? "Sim" : "Não"
      );
      formik.setFieldValue("nome", expense?.nome);
      formik.setFieldValue("tipo", expense?.tipo);
      setModeView(true);
    }
  }, []);

  const convertingExpensesToOptions = useCallback(() => {
    let newOptionsMain: any[] = [];

    expenses?.map((expense) => {
      expense.aceitaLancamento === false &&
        newOptionsMain.push({
          value: expense.id,
          label: `${expense.id} - ${expense.nome}`,
        });
    });

    setOptionMain(newOptionsMain);
  }, []);

  const formik = useFormik({
    initialValues: {
      principal: "",
      id: "",
      nome: "",
      tipo: "",
      aceitaLancamento: "",
    },
    onSubmit: (values) => {
      let newExpense = {
        id: values.id,
        nome: values.nome,
        tipo: values.tipo,
        aceitaLancamento: values.aceitaLancamento === "sim" ? true : false,
      };

      addExpense(newExpense);
      navigation.navigate("Home", {});
    },
    validationSchema: SchemaYup,
    validate(values) {
      /* Algumas validações especificas fora do yup */
      const main = findMainExpense(values?.principal);
      const codigoIsRepeated = findLevelExpense(values.id);
      const errors = {} as ExpensesData;

      if (main && main?.tipo !== values.tipo) {
        errors.tipo = "O tipo da conta deve ser igual ao do pai da conta";
      }

      if (codigoIsRepeated) {
        errors.id = "Código já esta em uso";
      }

      return errors;
    },
  });

  return (
    <View>
      <Header onClick={formik.handleSubmit} modeView={modeView} />
      <Card>
        <ScrollView>
          <View style={style.container}>
            <Select
              options={OptionsMain}
              label="Conta pai"
              placeholder="Selecione a conta pai"
              value={formik.values.principal}
              setSelected={(val) => {
                const id = generateNewCode(val);
                formik.setFieldValue("principal", val);
                formik.setFieldValue("id", id);
              }}
            />
            {formik.touched.principal && formik.errors.principal && (
              <MessageError message={formik.errors.principal} />
            )}

            <Input
              label="Código"
              placeholder="Digite o código da conta"
              value={formik.values.id}
              onChangeText={formik.handleChange("id")}
              onBlur={formik.handleBlur("id")}
            />
            {formik.touched.id && formik.errors.id && (
              <MessageError message={formik.errors.id} />
            )}

            <Input
              label="Nome"
              placeholder="Digite o nome da conta"
              value={formik.values.nome}
              onChangeText={formik.handleChange("nome")}
              onBlur={formik.handleBlur("nome")}
            />
            {formik.touched.nome && formik.errors.nome && (
              <MessageError message={formik.errors.nome} />
            )}

            <Select
              options={[
                { label: "Receita", value: "Receita" },
                { label: "Despesa", value: "Despesa" },
              ]}
              label="Tipo"
              placeholder="Selecione o tipo da conta"
              value={formik.values.tipo}
              setSelected={(val) => formik.setFieldValue("tipo", val)}
            />
            {formik.touched.tipo && formik.errors.tipo && (
              <MessageError message={formik.errors.tipo} />
            )}

            <Select
              options={[
                { label: "Sim", value: "Sim" },
                { label: "Não", value: "Não" },
              ]}
              label="Aceita lançamentos"
              placeholder="Selecione se aceita lançamentos"
              value={formik.values.aceitaLancamento}
              setSelected={(val) =>
                formik.setFieldValue("aceitaLancamento", val)
              }
            />
            {formik.touched.aceitaLancamento &&
              formik.errors.aceitaLancamento && (
                <MessageError message={formik.errors.aceitaLancamento} />
              )}
          </View>
        </ScrollView>
      </Card>
    </View>
  );
}
