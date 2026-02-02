interface TaskInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

function TaskInput({ value, onChange, onAdd }: TaskInputProps) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === "Enter" && onAdd()}
        placeholder="Add new task..."
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TaskInput;
