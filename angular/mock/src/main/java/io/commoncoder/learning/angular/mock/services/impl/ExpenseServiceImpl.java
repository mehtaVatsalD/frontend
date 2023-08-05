package io.commoncoder.learning.angular.mock.services.impl;

import io.commoncoder.learning.angular.mock.dtos.request.AddExpenseRequestDTO;
import io.commoncoder.learning.angular.mock.dtos.response.AddExpenseResponseDTO;
import io.commoncoder.learning.angular.mock.models.Expense;
import io.commoncoder.learning.angular.mock.services.ExpenseService;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    private final Map<String, Expense> expenseMap = new ConcurrentHashMap<>();

    @Override
    public AddExpenseResponseDTO addNewExpense(AddExpenseRequestDTO addExpenseRequestDTO) {
        Expense newExpense = mapToExpense(addExpenseRequestDTO);
        expenseMap.put(newExpense.getExpenseId(), newExpense);
        return mapToAddExpenseResponseDTO(newExpense);
    }

    @Override
    public List<Expense> getAllExpenses() {
        return new ArrayList<>(expenseMap.values());
    }

    @Override
    public Expense getExpenseById(String expenseId) {
        return expenseMap.get(expenseId);
    }

    @Override
    public Expense updateExpense(String expenseId, Expense expense) {
        expenseMap.put(expenseId, expense);
        return expense;
    }

    @Override
    public Expense deleteExpense(String expenseId) {
        return expenseMap.remove(expenseId);
    }

    private AddExpenseResponseDTO mapToAddExpenseResponseDTO(Expense expense) {
        return AddExpenseResponseDTO.builder()
                .expenseId(expense.getExpenseId())
                .amount(expense.getAmount())
                .description(expense.getDescription())
                .tags(expense.getTags())
                .createdAt(expense.getCreatedAt())
                .updatedAt(expense.getUpdatedAt())
                .build();
    }

    private Expense mapToExpense(AddExpenseRequestDTO addExpenseRequestDTO) {
        String newExpenseId = UUID.randomUUID().toString();
        long currentTime = Instant.now().getEpochSecond();
        return Expense.builder()
                .expenseId(newExpenseId)
                .amount(addExpenseRequestDTO.getAmount())
                .description(
                        addExpenseRequestDTO.getDescription()
                )
                .tags(addExpenseRequestDTO.getTags())
                .createdAt(currentTime)
                .build();
    }
}
