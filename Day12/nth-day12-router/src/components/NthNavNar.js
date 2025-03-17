import React from "react";
import { Link } from "react-router-dom";

export default function NthNavNar() {
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
            Home
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link
            to="/about"
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
            About Us
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link
            to="/contact"
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
            Contact
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link
            to="/list-user"
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
            List User
          </Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link
            to="/create-user"
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
            Create User
          </Link>
        </li>
      </ul>
    </nav>
  );
}
