import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);
  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  if(isFetching) {
    return <LoadingOverlay />
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const pastWeek = getDateMinusDays(today, 7);
    return expense.date > pastWeek && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered for the past week"
    />
  );
};

export default RecentExpenses;
