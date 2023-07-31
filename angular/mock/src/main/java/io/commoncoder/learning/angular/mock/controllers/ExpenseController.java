package io.commoncoder.learning.angular.mock.controllers;

import io.commoncoder.learning.angular.mock.dtos.request.AddExpenseRequestDTO;
import io.commoncoder.learning.angular.mock.dtos.response.AddExpenseResponseDTO;
import io.commoncoder.learning.angular.mock.models.Expense;
import io.commoncoder.learning.angular.mock.services.ExpenseService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(("/api/v1/expenses"))
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public AddExpenseResponseDTO addExpense(@RequestBody AddExpenseRequestDTO addExpenseRequestDTO) {
        return expenseService.addNewExpense(addExpenseRequestDTO);
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @GetMapping("/{expenseId}")
    public Expense getExpense(@PathVariable String expenseId) {
        return expenseService.getExpenseById(expenseId);
    }

    @PutMapping("/{expenseId}")
    public Expense updateExpense(@PathVariable String expenseId, @RequestBody Expense expense) {
        return expenseService.updateExpense(expenseId, expense);
    }

    @DeleteMapping("/{expenseId}")
    public Expense deleteExpense(@PathVariable String expenseId) {
        return expenseService.deleteExpense(expenseId);
    }
}
