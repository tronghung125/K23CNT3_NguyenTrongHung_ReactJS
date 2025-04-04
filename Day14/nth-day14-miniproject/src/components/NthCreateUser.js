import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const nthApiOnline = "https://67d922b700348dd3e2a9b681.mockapi.io/k23cnt3_nguyentronghung/nth_users";

function NthCreateUser() {
    const [user, setUser] = useState({
        nth_name: "",
        nth_email: "",
        nth_phone: "",
        nth_active: false, // Mặc định là không hoạt động
    });
    const navigate = useNavigate();

    // Xử lý thay đổi input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Xử lý submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(nthApiOnline, user);
            alert("Người dùng đã được tạo thành công!");
            navigate("/users"); // Quay lại danh sách người dùng
        } catch (err) {
            console.error("Lỗi khi tạo người dùng:", err);
            alert("Không thể tạo người dùng. Hãy thử lại!");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>➕ Tạo Người Dùng Mới</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Tên:</label>
                <input type="text" name="nth_name" value={user.nth_name} onChange={handleChange} required style={styles.input} />

                <label style={styles.label}>Email:</label>
                <input type="email" name="nth_email" value={user.nth_email} onChange={handleChange} required style={styles.input} />

                <label style={styles.label}>Số điện thoại:</label>
                <input type="text" name="nth_phone" value={user.nth_phone} onChange={handleChange} required style={styles.input} />

                {/* Checkbox trạng thái */}
                <div style={styles.checkboxContainer}>
                    <label style={styles.label}>
                        <input type="checkbox" name="nth_active" checked={user.nth_active} onChange={handleChange} />
                        <span style={{ marginLeft: "10px", fontWeight: "bold", color: user.nth_active ? "green" : "red" }}>
                            {user.nth_active ? "🟢 Hoạt động" : "🔴 Không hoạt động"}
                        </span>
                    </label>
                </div>

                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.buttonCreate}>✅ Tạo Mới</button>
                    <button type="button" style={styles.buttonBack} onClick={() => navigate("/users")}>🔙 Quay Lại</button>
                </div>
            </form>
        </div>
    );
}

// CSS Styles
const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        maxWidth: "500px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
        textAlign: "left",
    },
    input: {
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "14px",
    },
    checkboxContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "10px 0",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    buttonCreate: {
        padding: "10px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "14px",
        transition: "0.3s",
        flex: 1,
        marginRight: "5px",
    },
    buttonBack: {
        padding: "10px",
        backgroundColor: "#dc3545",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "14px",
        transition: "0.3s",
        flex: 1,
        marginLeft: "5px",
    },
};

export default NthCreateUser;
