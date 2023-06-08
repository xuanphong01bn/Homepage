import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css";
function CalendarReact() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ marginTop: "12px" }}>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
}

export default CalendarReact;
