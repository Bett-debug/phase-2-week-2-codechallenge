function GoalCard({ goal, onDelete }) {
  
  const progress = Math.min((goal.savedAmount / goal.targetAmount) *100, 100);
  const daysLeft = Math.ceil((new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24));
  const isComplete = goal.savedAmount >= goal.targetAmount;

  return (
    <div className="bg-white shadow p-4 rounded border">
      <h2 className="font-bold text-lg">{goal.name}</h2>
      <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
      <div className="h-2 bg-gray-200 rounded my-2">
        <div className="h-full bg-green-500" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-sm text-gray-600">Deadline: {goal.deadline} ({daysLeft} days left)</p>
      {isComplete && <p className="text-green-600 font-semibold">Goal Complete</p>}
      <button
        className="mt-2 text-red-500 underline"
        onClick={() => onDelete(goal.id)}
      >
        Delete
      </button>
    </div>
  );
}
export default GoalCard;