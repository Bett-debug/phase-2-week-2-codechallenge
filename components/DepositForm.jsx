import React, { useState } from 'react';

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState('');
  const [goalId, setGoalId] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const goal = goals.find(g => g.id === goalId);
    const updatedAmount = goal.savedAmount + Number(amount);
    onDeposit(goalId, { savedAmount: updatedAmount });
    setAmount('');
    setGoalId('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
      <input className="border p-2 rounded" type="number" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <select className="border p-2 rounded" value={goalId} onChange={e => setGoalId(e.target.value)} required>
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <button className="bg-green-600 text-white rounded p-2" type="submit">Deposit</button>
    </form>
  );
}
export default DepositForm;