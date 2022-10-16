import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-10-01"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-10-02"),
  },
  {
    id: "e3",
    description: "some fruits",
    amount: 5.99,
    date: new Date("2022-10-03"),
  },
  {
    id: "e4",
    description: "tution fee",
    amount: 150.0,
    date: new Date("2022-10-03"),
  },
  {
    id: "e5",
    description: "biryani",
    amount: 5.99,
    date: new Date("2022-10-08"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-10-09"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-10-10"),
  },
  {
    id: "e8",
    description: "some fruits",
    amount: 5.99,
    date: new Date("2022-10-11"),
  },
  {
    id: "e9",
    description: "tution fee",
    amount: 150.0,
    date: new Date("2022-10-12"),
  },
  {
    id: "e10",
    description: "biryani",
    amount: 5.99,
    date: new Date("2022-10-15"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updatableIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableIndex] = updatedItem;
      console.log(updatedExpenses, 'updatedExpenses');
      return updatedExpenses;
    case "DELETE":
        return state.filter(expense => expense.id !== action.payload.id)
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id },
    });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: "UPDATE",
      payload: { id, data: expenseData },
    });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
