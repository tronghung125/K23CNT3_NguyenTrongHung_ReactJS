import React, { useState } from "react";

export default function NthFormUser({ onNthAddNew }) {
  const [id, setNthId] = useState("");
  const [nthFullName, setNthFullName] = useState("");
  const [nthUserName, setNthUserName] = useState("");
  const [nthPass, setNthPass] = useState("");

  const nthHandleSubmit = (event) => {
    event.preventDefault();
    console.log(id, nthFullName, nthUserName, nthPass);

    onNthAddNew({ id, nthFullName, nthUserName, nthPass });

    // Reset form sau khi submit
    setNthId("");
    setNthFullName("");
    setNthUserName("");
    setNthPass("");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Thêm Người Dùng
      </h2>
      <form onSubmit={nthHandleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Mã sinh viên:</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(ev) => setNthId(ev.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Họ và tên:</label>
          <input
            type="text"
            name="nthFullName"
            value={nthFullName}
            onChange={(ev) => setNthFullName(ev.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Tài khoản:</label>
          <input
            type="text"
            name="nthUserName"
            value={nthUserName}
            onChange={(ev) => setNthUserName(ev.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="nthPass"
            value={nthPass}
            onChange={(ev) => setNthPass(ev.target.value)}
            style={inputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Save
        </button>
      </form>
    </div>
  );
}

// 🌟 Style cho input
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

// 🌟 Style cho button
const buttonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background 0.3s",
};

