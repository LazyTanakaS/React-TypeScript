import type { Month } from "../types/types";
import { FaStar, FaLock, FaPlus, FaTimes } from "react-icons/fa";

interface SideBarProps {
  months: Month[];
  activeMonthId: string;
  onMonthSelect: (monthId: string) => void;
  onAddMonth: () => void;
  onClosedMonth: () => void;
}

function SideBar({
  months,
  activeMonthId,
  onMonthSelect,
  onAddMonth,
  onClosedMonth,
}: SideBarProps) {
  const activeMonth = months.find((m) => m.id === activeMonthId);
  const closedMonth = months.filter((m) => m.isClosed);
  {
    closedMonth.map((month) => {
      <button
        key={month.id}
        className="month-item closed"
        onClick={() => onMonthSelect(month.id)}
        disabled={activeMonth?.isClosed}
      >
        <FaLock /> {month.name}
      </button>;
    });
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Current</h3>
        {activeMonth && (
          <button
            className="month-item active"
            onClick={() => onMonthSelect(activeMonth.id)}
          >
            <FaStar /> {activeMonth.name}
          </button>
        )}
      </div>

      <div className="sidebar-section">
        <h3>Closed</h3>
        {closedMonth.map((months) => (
          <button
            key={months.id}
            className="month-item closed"
            onClick={() => onMonthSelect(months.id)}
          >
            <FaLock /> {months.name}
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <h3>Actions</h3>
        <div className="sidebar-actions">
          <button className="btn-add-month" onClick={onAddMonth}>
            <FaPlus /> New Month
          </button>
          <button className="btn-close-month" onClick={onClosedMonth}>
            <FaTimes /> Close Current
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
