import React from "react";

export default function NthContact() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>📞 Thông tin liên hệ</h2>
        <p><strong>👤 Họ và tên:</strong> Nguyễn Trọng Hưng</p>
        <p><strong>🎓 Mã sinh viên:</strong> 2310900039</p>
        <p><strong>🏫 Lớp:</strong> K23CNT3</p>
        <p><strong>📧 Email:</strong> <a href="mailto:tronghung122005@gmail.com" style={linkStyle}>tronghung122005@gmail.com</a></p>
        <p><strong>📱 Điện thoại:</strong> <a href="tel:0329930596" style={linkStyle}>0329930596</a></p>
      </div>
    </div>
  );
}

// 🌟 Style cho container
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
};

// 🌟 Style cho card hiển thị thông tin
const cardStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  textAlign: "left",
  maxWidth: "400px",
};

// 🌟 Style cho tiêu đề
const titleStyle = {
  textAlign: "center",
  color: "#007bff",
  marginBottom: "20px",
};

// 🌟 Style cho link (email & điện thoại)
const linkStyle = {
  textDecoration: "none",
  color: "#007bff",
  fontWeight: "bold",
};
