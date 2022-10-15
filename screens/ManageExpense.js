import { useLayoutEffect } from "react";
import { StyleSheet, Text } from "react-native";

const ManageExpense = ({route, navigation}) => {
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        });
    }, [navigation, isEditing])

    return (
        <Text>ManageExpense screen</Text>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });