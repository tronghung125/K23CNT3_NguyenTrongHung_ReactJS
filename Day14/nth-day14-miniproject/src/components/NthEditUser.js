import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const nthApiOnline = "https://67d922b700348dd3e2a9b681.mockapi.io/k23cnt3_nguyentronghung/nth_users";

function NthEditUser() {
    const { id } = useParams();
    const [user, setUser] = useState({
        nth_name: "",
        nth_email: "",
        nth_phone: "",
        nth_active: false,  // Trạng thái mặc định
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            setError("Lỗi: ID không hợp lệ!");
            setLoading(false);
            return;
        }

        axios.get(`${nthApiOnline}/${id}`)
            .then((res) => {
                if (res.data && Object.keys(res.data).length > 0) {
                    setUser(res.data);
                    setLoading(false);
                } else {
                    setError("Không tìm thấy người dùng!");
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.error("Lỗi khi lấy dữ liệu từ API:", err.response?.status, err.message);
                setError(`Lỗi API (${err.response?.status || "Unknown"}): ${err.message}`);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${nthApiOnline}/${id}`, user);
            alert("Cập nhật thành công!");
            navigate("/users");
        } catch (err) {
            console.error("Lỗi khi cập nhật:", err);
            alert("Cập nhật thất bại! Hãy thử lại.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>✏ Sửa thông tin người dùng</h2>

            {loading ? (
                <p style={styles.loading}>⏳ Đang tải dữ liệu...</p>
            ) : error ? (
                <p style={styles.error}>⚠ {error}</p>
            ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>ID: {id}</label> {/* Hiển thị ID */}

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
                    <button type="submit" style={styles.button}>💾 Cập nhật</button>
                    <button type="button" style={styles.buttonBack} onClick={() => navigate("/users")}>🔙 Quay Lại</button>
                </form>
            )}
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
    loading: {
        fontSize: "18px",
        color: "#d9534f",
        fontWeight: "bold",
    },
    error: {
        fontSize: "18px",
        color: "red",
        fontWeight: "bold",
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
    button: {
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "14px",
        transition: "0.3s",
    },
};

export default NthEditUser;
