import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-10-01')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-10-02')
    },
    {
        id: 'e3',
        description: 'some fruits',
        amount: 5.99,
        date: new Date('2022-10-03')
    },
    {
        id: 'e4',
        description: 'tution fee',
        amount: 150.00,
        date: new Date('2022-10-03')
    },
    {
        id: 'e5',
        description: 'biryani',
        amount: 5.99,
        date: new Date('2022-10-08')
    },
    {
        id: 'e6',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2022-10-09')
    },
    {
        id: 'e7',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-10-10')
    },
    {
        id: 'e8',
        description: 'some fruits',
        amount: 5.99,
        date: new Date('2022-10-11')
    },
    {
        id: 'e9',
        description: 'tution fee',
        amount: 150.00,
        date: new Date('2022-10-12')
    },
    {
        id: 'e10',
        description: 'biryani',
        amount: 5.99,
        date: new Date('2022-10-15')
    },
    
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}  />
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
})