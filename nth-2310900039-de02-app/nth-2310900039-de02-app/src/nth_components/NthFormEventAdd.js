import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://67ef81fc2a80b06b889456dd.mockapi.io/nthApi/2310900039/nthEvent";

const NthFormEventAdd = () => {
    const [nthEventName, setNthEventName] = useState("");  // Tên sự kiện
    const [nthEventAdd, setNthEventAdd] = useState("");    // Địa điểm sự kiện
    const [nthEventDate, setNthEventDate] = useState("");  // Ngày sự kiện
    const [nthEventStatus, setNthEventStatus] = useState(true); // Trạng thái sự kiện, mặc định là true (Hiển thị)

    // Hàm xử lý gửi form
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newEvent = {
            nthEventName: nthEventName,
            nthEventAdd: nthEventAdd,
            nthEventDate: nthEventDate,  // Ngày sự kiện được giữ nguyên dưới dạng chuỗi (yyyy-mm-dd)
            nthEventStatus: nthEventStatus,
        };

        try {
            // Gửi yêu cầu POST để thêm sự kiện mới
            const response = await axios.post(API_URL, newEvent);
            console.log("Sự kiện mới đã được thêm:", response.data);
            // Reset form sau khi thêm sự kiện
            setNthEventName("");
            setNthEventAdd("");
            setNthEventDate("");
            setNthEventStatus(true); // Trạng thái mặc định là "Hiển thị"
        } catch (error) {
            console.error("Lỗi khi thêm sự kiện:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Thêm sự kiện mới</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="nthEventName">Tên sự kiện:</label>
                    <input
                        type="text"
                        id="nthEventName"
                        value={nthEventName}
                        onChange={(e) => setNthEventName(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="nthEventAdd">Địa điểm:</label>
                    <input
                        type="text"
                        id="nthEventAdd"
                        value={nthEventAdd}
                        onChange={(e) => setNthEventAdd(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="nthEventDate">Ngày:</label>
                    <input
                        type="date"
                        id="nthEventDate"
                        value={nthEventDate}
                        onChange={(e) => setNthEventDate(e.target.value)}
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label>
                        Trạng thái:
                        <input
                            type="checkbox"
                            checked={nthEventStatus}
                            onChange={(e) => setNthEventStatus(e.target.checked)}
                        />
                        {nthEventStatus ? "Hiển thị" : "Không"}
                    </label>
                </div>
                <button type="submit" style={styles.submitBtn}>Thêm sự kiện</button>
            </form>
        </div>
    );
};

// CSS inline styles
const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    form: { display: "flex", flexDirection: "column", gap: "10px" },
    formGroup: { display: "flex", flexDirection: "column" },
    input: {
        padding: "8px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "300px",
    },
    submitBtn: {
        background: "green",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default NthFormEventAdd;
