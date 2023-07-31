package io.commoncoder.learning.angular.mock.dtos.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Getter
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class AddExpenseResponseDTO {
    private String expenseId;
    private long amount;
    private String description;
    private Set<String> tags;
    private long createdAt;
    private long updatedAt;
}
