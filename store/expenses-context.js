import { createContext, useReducer } from "react";


export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ id, description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
    //   const id = new Date().toString() + Math.random().toString();
      return [action.payload, ...state];
    case "SET":
        const inverted = action.payload.reverse();
        return inverted;
    case "UPDATE":
      const updatableIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableIndex];
      const updatedItem = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableIndex] = updatedItem;
    //   console.log(updatedExpenses, 'updatedExpenses');
      return updatedExpenses;
    case "DELETE":
        return state.filter(expense => expense.id !== action.payload.id)
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  const addExpense = (expenseData) => {
    dispatch({
      type: "ADD",
      payload: expenseData,
    });
  };
  
  const setExpenses = (expenses) => {
    dispatch({
      type: "SET",
      payload: expenses,
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
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
