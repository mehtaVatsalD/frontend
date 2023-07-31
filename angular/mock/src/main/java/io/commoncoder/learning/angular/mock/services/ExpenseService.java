package io.commoncoder.learning.angular.mock.services;

import io.commoncoder.learning.angular.mock.dtos.request.AddExpenseRequestDTO;
import io.commoncoder.learning.angular.mock.dtos.response.AddExpenseResponseDTO;
import io.commoncoder.learning.angular.mock.models.Expense;

import java.util.List;

public interface ExpenseService {

    AddExpenseResponseDTO addNewExpense(AddExpenseRequestDTO addExpenseRequestDTO);
    List<Expense> getAllExpenses();
    Expense getExpenseById(String expenseId);
    Expense updateExpense(String expenseId, Expense expense);
    Expense deleteExpense(String expenseId);

}
