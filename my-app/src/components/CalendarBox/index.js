import React from "react";

const CalendarBox = ({ style, month, date }) => {
  return (
    <div
      style={{
        background: "#F3C003",
        display: "inline-block",
        color: "white",
        padding: "12px 4px",
        textTransform: "uppercase",
        ...style,
      }}
    >
      <div style={{ fontSize: "12px" }}>Tháng {month || 3}</div>
      <div style={{ fontSize: "24px" }}>{date || 19}</div>
    </div>
  );
};

export default CalendarBox;
