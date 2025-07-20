import React from 'react';

function Overview({ goals }) {
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completed = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="mb-4 bg-gray-100 p-4 rounded font-semibold">
      <p>Total Goals: {goals.length}</p>
      <p>Total Saved: ${totalSaved}</p>
      <p>Completed Goals: {completed}</p>
    </div>
  );
}
export default Overview;