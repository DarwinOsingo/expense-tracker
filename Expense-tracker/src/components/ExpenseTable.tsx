import React from "react";
import { Expense } from "../types/Expense";

interface ExpenseTableProps {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, onDelete }) => {
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Description</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Amount</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Date</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {expense.description}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {expense.category}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                ${expense.amount.toFixed(2)}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {expense.date}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
