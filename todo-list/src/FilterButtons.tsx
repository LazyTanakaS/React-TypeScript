import type { FilterType } from "./App";

interface FilteredButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function FilteredButtons({
  currentFilter,
  onFilterChange,
}: FilteredButtonsProps) {
  return (
    <div>
      <button
        onClick={() => onFilterChange("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange("active")}
        className={currentFilter === "active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => onFilterChange("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
}

export default FilteredButtons;
