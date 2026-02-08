import type { Month } from "../types/types";

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

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Current</h3>
        {activeMonth && (
          <button
            className="month-item active"
            onClick={() => onMonthSelect(activeMonth.id)}
          >
            ⭐ {activeMonth.name}
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
            🔒 {months.name}
          </button>
        ))}
      </div>

      <div className="sidebar-section">
        <h3>Actions</h3>
        <div className="sidebar-actions">
          <button className="btn-add-month" onClick={onAddMonth}>
            + New Month
          </button>
          <button className="btn-close-month" onClick={onClosedMonth}>
            Close Current
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
