import React from "react";
import { Link } from "react-router-dom";

export default function NthNavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px 0",
        textAlign: "center",
        borderRadius: "8px",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <li style={{ display: "inline" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Trang chủ
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link
            to="/users"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Danh sách User
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link
            to="/create"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#555")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
          >
            Thêm mới user
          </Link>
        </li>
      </ul>
    </nav>
  );
}
