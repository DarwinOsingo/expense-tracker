import React, { useState } from "react";
import { Expense } from "../types/Expense";

interface ExpenseFormProps {
  onAdd: (expense: Omit<Expense, "id">) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount !== "" && category && date) {
      onAdd({ description, amount: Number(amount), category, date });
      setDescription("");
      setAmount("");
      setCategory("");
      setDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value === "" ? "" : Number(e.target.value))
          }
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
