import React, { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [form, setForm] = useState({ name: '', targetAmount: '', category: '', deadline: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const newGoal = {
      ...form,
      id: crypto.randomUUID(),
      savedAmount: 0,
      targetAmount: Number(form.targetAmount),
      createdAt: new Date().toISOString().split('T')[0]
    };
    onAddGoal(newGoal);
    setForm({ name: '', targetAmount: '', category: '', deadline: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 grid grid-cols-1 gap-2">
      <input className="border p-2 rounded" name="name" placeholder="Goal Name" value={form.name} onChange={handleChange} required />
      <input className="border p-2 rounded" name="targetAmount" type="number" placeholder="Target Amount" value={form.targetAmount} onChange={handleChange} required />
      <input className="border p-2 rounded" name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
      <input className="border p-2 rounded" name="deadline" type="date" value={form.deadline} onChange={handleChange} required />
      <button className="bg-blue-500 text-white rounded p-2" type="submit">Add Goal</button>
    </form>
  );
}
export default GoalForm;