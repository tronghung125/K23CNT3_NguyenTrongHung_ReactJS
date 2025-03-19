import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://67d922b700348dd3e2a9b681.mockapi.io/k23cnt3_nguyentronghung/nth_users";

function NthListUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                console.log("Dữ liệu API:", response.data);
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Lỗi khi lấy danh sách người dùng:", error);
                setError("Không thể tải danh sách người dùng.");
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa người dùng này?")) {
            try {
                await axios.delete(`${API_URL}/${id}`);
                setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
                alert("Xóa thành công!");
            } catch (error) {
                console.error("Lỗi khi xóa người dùng:", error);
                alert("Xóa thất bại. Vui lòng thử lại!");
            }
        }
    };

    const handleEdit = (id) => {
        if (!id) {
            alert("Lỗi: Không tìm thấy ID người dùng!");
            return;
        }
        navigate(`/edit/${id}`);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>📜 Danh sách người dùng</h2>

            {loading ? (
                <p style={styles.loading}>⏳ Đang tải dữ liệu...</p>
            ) : error ? (
                <p style={styles.error}>⚠ {error}</p>
            ) : users.length === 0 ? (
                <p style={styles.noUsers}>📭 Không có người dùng nào.</p>
            ) : (
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>ID</th>
                            <th style={styles.th}>Tên</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Điện thoại</th>
                            <th style={styles.th}>Trạng thái</th>
                            <th style={styles.th}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td style={styles.td}>{user.id}</td>
                                <td style={styles.td}>{user.nth_name || "Không có tên"}</td>
                                <td style={styles.td}>{user.nth_email || "Không có email"}</td>
                                <td style={styles.td}>{user.nth_phone || "Không có số"}</td>
                                <td style={{ ...styles.td, color: user.nth_active ? "green" : "red", fontWeight: "bold" }}>
                                    {user.nth_active ? "🟢 Hoạt động" : "🔴 Không hoạt động"}
                                </td>
                                <td style={styles.td}>
                                    <button onClick={() => handleEdit(user.id)} style={styles.editBtn}>✏ Sửa</button>
                                    <button onClick={() => handleDelete(user.id)} style={styles.deleteBtn}>🗑 Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

// CSS Styles
const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        maxWidth: "1000px",
        margin: "auto",
        fontFamily: "'Poppins', sans-serif",
    },
    title: {
        color: "#333",
        fontSize: "26px",
        fontWeight: "bold",
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
    noUsers: {
        fontSize: "18px",
        color: "#555",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        overflow: "hidden",
    },
    th: {
        backgroundColor: "#007bff",
        color: "white",
        padding: "12px",
        borderBottom: "2px solid #ddd",
    },
    td: {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        textAlign: "center",
    },
    editBtn: {
        padding: "6px 10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        fontWeight: "bold",
        marginRight: "5px",
    },
    deleteBtn: {
        padding: "6px 10px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
        fontWeight: "bold",
    },
};

export default NthListUsers;
