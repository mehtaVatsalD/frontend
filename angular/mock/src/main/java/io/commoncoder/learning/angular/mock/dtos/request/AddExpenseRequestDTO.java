package io.commoncoder.learning.angular.mock.dtos.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Getter
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
public class AddExpenseRequestDTO {
    private long amount;
    private String description;
    private Set<String> tags;
}
