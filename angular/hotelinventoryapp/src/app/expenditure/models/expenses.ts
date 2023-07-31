export type Expense = {
    expenseId: string,
    amount: number,
    description: string,
    tags: string[],
    createdAt: number,
    updatedAt?: number
}

export type NewExpense = {
    amount: number,
    description: string,
    tags: string,
    wastefulExpense: boolean
}