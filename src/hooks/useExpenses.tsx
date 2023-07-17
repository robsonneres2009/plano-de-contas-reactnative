import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface ExpensesContextData {
  expenses: Array<ExpensesData>;
  setExpenses: Dispatch<SetStateAction<ExpensesData[]>>;
  removeExpense: (id: string) => void;
  addExpense: (expense: ExpensesData) => void;
  generateNewCode: (id: string) => string | null;
  findLevelExpense: (id: string) => ExpensesData | null;
  findMainExpense: (id: string) => ExpensesData | null;
}

export interface ExpensesData {
  id: string;
  nome: string;
  tipo: string;
  aceitaLancamento: boolean;
}

interface Props {
  children: ReactNode;
}

export const ExpensesContext = createContext<ExpensesContextData>(
  {} as ExpensesContextData
);

const ExpensesProvider = ({ children }: Props) => {
  const [expenses, setExpenses] = useState([
    {
      id: "9.9",
      nome: "Conta X",
      tipo: "Receita",
      aceitaLancamento: false,
    },
    {
      id: "9.10",
      nome: "Conta X",
      tipo: "Receita",
      aceitaLancamento: true,
    },
    {
      id: "9.9.999",
      nome: "Conta X",
      tipo: "Receita",
      aceitaLancamento: true,
    },
    {
      id: "9.9.999.999",
      nome: "Conta X",
      tipo: "Receita",
      aceitaLancamento: false,
    },
    {
      id: "9.9.999.99.998",
      nome: "Conta X",
      tipo: "Receita",
      aceitaLancamento: true,
    },
    {
      id: "9.9.999.999.999",
      nome: "Conta X",
      tipo: "Receita",
      aceitaLancamento: true,
    },
  ] as Array<ExpensesData>);

  const removeExpense = (id: string) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };

  const addExpense = (expense: ExpensesData) => {
    let newExpenses = expenses;
    let newExpense = expense;
    if (expense.id.length === 1) newExpense.id = `${newExpense.id}.0`;
    newExpenses.push(newExpense);
    setExpenses(newExpenses);
  };

  const generateNewCode = (id: string) => {
    if (id) {
      /* Declara o novo codigo em forma de array e string */
      let newCodArray: any[] = [];
      let newCod = "";

      /* Separando a os numeros do texto*/
      const regexToNumber = /[^0-9.]/g;
      const numberDefault = id.replace(regexToNumber, "");

      /* Transformando em array a string de numeros */
      const decimalsMain = numberDefault.split(".");

      /* Apagando ultimo digito e tranformando em string */
      let ParentID: String[] = [];
      ParentID = decimalsMain;
      ParentID.length > 1 && ParentID.pop();
      ParentID.join(".");

      /* Encontrando filhos */
      const maxChildAccount = expenses
        .filter((expense) => expense.id.startsWith(ParentID.join(".") + "."))
        .reduce((maxExpense: ExpensesData | null, expense: ExpensesData) => {
          if (!maxExpense || expense.id > maxExpense.id) {
            return expense;
          }
          return maxExpense;
        }, null);

      /* Transformando em array a string de numeros */
      const decimals = maxChildAccount?.id?.split(".").reverse();
      newCodArray = decimals || [];

      /* 
        Criando validador para saber se encontrou o primeiro nivel menor que o
        limite para poder adicionar + 1 
      */
      let foundLessThan999 = false;
      for (let i = 0; i < newCodArray.length; i++) {
        const currentItem = newCodArray[i];

        if (currentItem === "999") {
          newCodArray.splice(i, 1);
          i--; // Ajustar o índice após a remoção do item
        } else if (!foundLessThan999 && Number(currentItem) < 999) {
          newCodArray[i] = (Number(currentItem) + 1).toString();

          const testingDuplicated = findLevelExpense(
            newCodArray.reverse().join(".")
          );

          foundLessThan999 = testingDuplicated ? false : true;
        }
      }

      newCodArray.reverse();
      newCod = newCodArray.join(".");

      return newCod;
    } else {
      return null;
    }
  };

  const findLevelExpense = (id: string) => {
    if (id) {
      /* Separando a os numeros do texto*/
      const regexToNumber = /[^0-9.]/g;
      const numberDefault = id.replace(regexToNumber, "");

      /* Transformando em array a string de numeros */
      const decimalsMain = numberDefault.split(".");

      /* Apagando ultimo digito e tranformando em string */
      let ParentID: String[] = [];
      ParentID = decimalsMain;
      ParentID.join(".");

      /* Encontrando main */
      const main = expenses.filter(
        (expense) => expense.id === ParentID.join(".")
      );

      return main.length > 0 ? main[0] : null;
    } else {
      return null;
    }
  };

  const findMainExpense = (id: string) => {
    if (id) {
      /* Separando a os numeros do texto*/
      const regexToNumber = /[^0-9.]/g;
      const numberDefault = id.replace(regexToNumber, "");

      /* Transformando em array a string de numeros */
      const decimalsMain = numberDefault.split(".");

      /* Apagando ultimo digito e tranformando em string */
      let ParentID: String[] = [];
      ParentID = decimalsMain;
      ParentID.length > 1 && ParentID.pop();
      ParentID.join(".");

      /* Encontrando main */
      const main = expenses.filter((expense) =>
        expense.id.startsWith(ParentID.join("."))
      );

      return main.length > 0 ? main[0] : null;
    } else {
      return null;
    }
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        setExpenses,
        removeExpense,
        addExpense,
        generateNewCode,
        findLevelExpense,
        findMainExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

function useExpenses(): ExpensesContextData {
  const context = useContext(ExpensesContext);
  return context;
}

export { ExpensesProvider, useExpenses };
