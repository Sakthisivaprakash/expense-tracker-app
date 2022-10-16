import axios from "axios";

const BACKEND_URL =
  "https://expense-tracker-rn-5fa91-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
    const response = await axios.post(BACKEND_URL + "/expenses.json", expenseData)
    // console.log(response.data, 'stored Data');
    return response.data;
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for(const key in response.data) {
    const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
    }
    expenses.push(expenseObj);
  }

  return expenses;
};


export const updateExpense = async (id, expenseData) => {
    const response = await axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
    return response;
}

export const deleteExpense = async (id) => {
    const response = await axios.delete(BACKEND_URL + `/expenses/${id}.json`);
    return response;
}