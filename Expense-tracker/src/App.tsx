import React, { useState } from "react";
import { Expense } from "./types/Expense";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [search, setSearch] = useState("");

  const handleAddExpense = (expense: Omit<Expense, "id">) => {
    const newExpense: Expense = {
      ...expense,
      id: Date.now(),
    };
    setExpenses((prev) => [newExpense, ...prev]);
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="sidebar">
        <h2>Add Expense</h2>
        <p>Enter your expense details below</p>
        <ExpenseForm onAdd={handleAddExpense} />
      </div>
      <div className="main">
        <SearchBar search={search} onSearch={setSearch} />
        <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  );
};

export default App;
