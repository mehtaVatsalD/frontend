package io.commoncoder.learning.angular.mock.models;

import com.google.common.collect.ImmutableSet;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Getter
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class Expense {
    private String expenseId;
    private long amount;
    private String description;
    private Set<String> tags;
    private long createdAt;
    private long updatedAt;
}
