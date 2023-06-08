import React from "react";
import CalendarBox from "../CalendarBox";
const calendar = [
  {
    month: "3",
    date: "19",
    content: "Tư vấn tuyển sinh Openday 2023",
  },
  {
    month: "3",
    date: "30",
    content: "Lễ bảo vệ Đồ án tốt nghiệp kỳ 2022.1",
  },
  {
    month: "4",
    date: "05",
    content: `Lễ ký kết hợp tác giữa Viện Sư phạm Kỹ
        thuật và Công ty cổ phần Công nghệ &
        Sáng tạo trẻ Teky Holdings`,
  },
  {
    month: "4",
    date: "21",
    content: "Dự án Chắp cánh E-learning - Lai Châu",
  },
];
const Event = () => {
  return (
    <div>
      <h1
        style={{
          color: "#F3C003",
          textTransform: "uppercase",
          marginBottom: "42px",
        }}
      >
        Sự kiện nổi bật
      </h1>
      <div>
        {calendar?.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
              gap: "8px",
              marginBottom: "32px",
            }}
          >
            <CalendarBox
              style={{ padding: "4px", minWidth: "57px", height: "57px" }}
              month={item.month}
              date={item.date}
            />
            <h4 style={{ margin: "0px" }}>{item.content}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
