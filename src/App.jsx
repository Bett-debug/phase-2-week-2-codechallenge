import React, { useEffect, useState } from 'react';
import GoalCard from '../components/GoalCard';
import GoalForm from '../components/GoalForm';
import DepositForm from '../components/DepositForm';
import Overview from '../components/Overview';

const API = 'https://json-server-rqpr.onrender.com/goals';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch(API).then(res => res.json()).then(setGoals);
  }, []);

  const addGoal = (goal) => {
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(goal)
    })
    .then(res => res.json())
    .then(newGoal => setGoals([...goals, newGoal]));
  };

  const updateGoal = (id, data) => {
    fetch(`${API}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(updated => {
      setGoals(goals.map(g => g.id === id ? updated : g));
    });
  };

  const deleteGoal = (id) => {
    fetch(`${API}/${id}`, { method: 'DELETE' })
    .then(() => setGoals(goals.filter(g => g.id !== id)));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto font-serif bg-blue-100">
      <h1 className="text-2xl font-bold mb-4"> Smart Goal Planner</h1>
      <Overview goals={goals} />
      <GoalForm onAddGoal={addGoal} />
      <DepositForm goals={goals} onDeposit={updateGoal} />
      <div className="grid gap-4">
        {goals.map(goal => (
          <GoalCard key={goal.id} goal={goal} onDelete={deleteGoal} />
        ))}
      </div>
    </div>
  );
}
export default App