import React from "react";

export default function NthNew() {
  // Danh sách tin tức giả lập
  const newsList = [
    {
      id: 1,
      title: "Ra mắt mẫu xe máy cổ điển mới nhất 2025",
      description: "Dòng xe cổ điển mới với thiết kế đậm chất vintage...",
      image: "https://media.vov.vn/sites/default/files/styles/large/public/2024-04/301730437ba8d5f68cb9.jpg",
      link: "https://clevelandcyclewerks.vn/san-pham/xe/misfit-400-twin?gad_source=5&gclid=EAIaIQobChMIoIq4xOCQjAMVRNAWBR1PzyJkEAAYASAAEgIPxvD_BwE",
    },
    {
      id: 2,
      title: "Cộng đồng xe máy cổ điển ngày càng phát triển",
      description: "Những người yêu thích xe cổ điển đang tụ họp...",
      image: "https://darwinmotors.com/wp-content/uploads/2020/02/ban-biet-gi-ve-xe-classic.jpg",
      link: "https://vietgiaitri.com/cong-dong-mo-to-key/",
    },
    {
      id: 3,
      title: "Cách bảo quản xe cổ điển bền đẹp theo thời gian",
      description: "Hướng dẫn cách chăm sóc và bảo trì xe máy cổ...",
      image: "https://s3.cloud.cmctelecom.vn/tinhte1/2018/01/4227435_Brixton_BX_150_Xe_Tinhte_020.jpg",
      link: "https://minhmotor.com/bao-duong-dong-co-dien.html",
    },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>📰 Tin Tức </h2>
      <div style={newsContainer}>
        {newsList.map((news) => (
          <div key={news.id} style={cardStyle}>
            <img src={news.image} alt={news.title} style={imageStyle} />
            <div style={contentStyle}>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <a href={news.link} style={buttonStyle}>Đọc thêm →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 🌟 CSS Styles
const containerStyle = {
  padding: "40px",
  backgroundColor: "#f8f9fa",
  textAlign: "center",
};

const titleStyle = {
  color: "#007bff",
  marginBottom: "20px",
};

const newsContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
  justifyContent: "center",
};

const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  overflow: "hidden",
  textAlign: "left",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const contentStyle = {
  padding: "15px",
};

const buttonStyle = {
  display: "inline-block",
  padding: "10px 15px",
  backgroundColor: "#007bff",
  color: "white",
  borderRadius: "5px",
  textDecoration: "none",
  marginTop: "10px",
  fontWeight: "bold",
};

export { NthNew };
