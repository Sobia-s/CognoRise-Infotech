import React, { useState } from "react";
import "./todo.css";

function GoalForm({ onAdd }) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ goal: "", by: "" });
  };

  return (
    <div className="goal-form">
      <h2>Add a Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Goal</button>
      </form>
    </div>
  );
}

function ListOfGoals({ allGoals, onRemove }) {
  const handleRemove = (goal) => {
    onRemove(goal);
  };

  return (
    <>
    <div className="goal-list">
      <h2>My Goals</h2>
      <ul>
        {allGoals.map((goal) => (
          <li key={goal.id}>
            <span>My goal is to {goal.goal}, by {goal.by}</span>
            <button onClick={() => handleRemove(goal)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default function ToDoApp() {
  const [allGoals, setAllGoals] = useState([]);

  const addGoal = (newGoal) => {
    const updatedGoals = [...allGoals, { ...newGoal, id: Date.now() }];
    setAllGoals(updatedGoals);
  };

  const removeGoal = (goalToRemove) => {
    const updatedGoals = allGoals.filter((goal) => goal.id !== goalToRemove.id);
    setAllGoals(updatedGoals);
  };

  return (
    <>
    <div className="to-do">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} onRemove={removeGoal} />
    </div>
    </>
  );
}
