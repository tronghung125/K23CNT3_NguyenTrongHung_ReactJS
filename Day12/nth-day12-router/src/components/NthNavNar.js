import React from "react";
import { Link } from "react-router-dom";
import "./NthNavNar.css";

export default function NthNavNar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/about">Giới Thiệu</Link></li>
        <li><Link to="/contact">Liên Hệ</Link></li>
        <li><Link to="/list-user">Danh Sách Người Dùng</Link></li>
        <li><Link to="/create-user">Thêm Người Dùng</Link></li>
      </ul>
    </nav>
  );
}
