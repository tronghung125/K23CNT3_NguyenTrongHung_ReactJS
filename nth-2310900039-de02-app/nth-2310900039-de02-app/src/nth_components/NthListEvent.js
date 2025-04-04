import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://67ef81fc2a80b06b889456dd.mockapi.io/nthApi/2310900039/nthEvent";

const NthListEvent = () => {
    const [events, setEvents] = useState([]);
    const [editEvent, setEditEvent] = useState(null);
    const [editedData, setEditedData] = useState({});

    // Lấy danh sách sự kiện từ MockAPI
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                console.log("Dữ liệu lấy về:", response.data);
                setEvents(response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu từ API:", error);
            });
    }, []);

    // Xóa sự kiện
    const deleteEvent = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setEvents(events.filter((event) => event.id !== id));
        } catch (error) {
            console.error("Lỗi khi xóa sự kiện:", error);
        }
    };

    // Chỉnh sửa sự kiện
    const handleEditClick = (event) => {
        setEditEvent(event.id);
        setEditedData({ ...event });
    };

    // Lưu chỉnh sửa
    const handleSaveEdit = async () => {
        try {
            await axios.put(`${API_URL}/${editEvent}`, editedData);
            setEvents(events.map((event) => (event.id === editEvent ? editedData : event)));
            setEditEvent(null);
        } catch (error) {
            console.error("Lỗi khi cập nhật sự kiện:", error);
        }
    };

    // Cập nhật giá trị chỉnh sửa
    const handleChange = (e) => {
        setEditedData({ ...editedData, [e.target.name]: e.target.value });
    };

    // Chuyển đổi trạng thái sự kiện
    const toggleStatus = async (id, currentStatus) => {
        try {
            await axios.put(`${API_URL}/${id}`, { nthEventStatus: !currentStatus });
            setEvents(
                events.map((event) =>
                    event.id === id ? { ...event, nthEventStatus: !currentStatus } : event
                )
            );
        } catch (error) {
            console.error("Lỗi khi cập nhật trạng thái:", error);
        }
    };

    return (
        <div style={styles.container}>
            <h2>Danh sách sự kiện</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Tên sự kiện</th>
                        <th>Địa điểm</th>
                        <th>Ngày</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event.id}>
                            <td>
                                {editEvent === event.id ? (
                                    <input
                                        type="text"
                                        name="nthEventName"
                                        value={editedData.nthEventName}
                                        onChange={handleChange}
                                        style={styles.input}
                                    />
                                ) : (
                                    event.nthEventName
                                )}
                            </td>
                            <td>
                                {editEvent === event.id ? (
                                    <input
                                        type="text"
                                        name="nthEventAdd"
                                        value={editedData.nthEventAdd}
                                        onChange={handleChange}
                                        style={styles.input}
                                    />
                                ) : (
                                    event.nthEventAdd
                                )}
                            </td>
                            <td>
                                {editEvent === event.id ? (
                                    <input
                                        type="date"
                                        name="nthEventDate"
                                        value={editedData.nthEventDate}
                                        onChange={handleChange}
                                        style={styles.input}
                                    />
                                ) : (
                                    event.nthEventDate
                                )}
                            </td>
                            <td>
                                <button
                                    onClick={() => toggleStatus(event.id, event.nthEventStatus)}
                                    style={{
                                        ...styles.statusBtn,
                                        backgroundColor: event.nthEventStatus ? "green" : "red",
                                    }}
                                >
                                    {event.nthEventStatus ? "Hiển thị" : "Không"}
                                </button>
                            </td>

                            <td style={styles.actions}>
                                {editEvent === event.id ? (
                                    <button onClick={handleSaveEdit} style={styles.saveBtn}>Lưu</button>
                                ) : (
                                    <button onClick={() => handleEditClick(event)} style={styles.editBtn}>Sửa</button>
                                )}
                                <button onClick={() => deleteEvent(event.id)} style={styles.deleteBtn}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// CSS inline styles
const styles = {
    container: { padding: "20px", fontFamily: "Arial, sans-serif" },
    table: { width: "100%", borderCollapse: "collapse", marginBottom: "20px", textAlign: "center" },
    th: { textAlign: "left", padding: "8px", backgroundColor: "#f4f4f4", fontWeight: "bold" },
    td: { padding: "8px", border: "1px solid #ddd" },
    input: { width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc", boxSizing: "border-box" },
    statusBtn: { color: "white", border: "none", padding: "5px 10px", borderRadius: "5px", cursor: "pointer" },
    actions: { display: "flex", gap: "10px", justifyContent: "center" },
    editBtn: {
        background: "orange", 
        color: "white", 
        padding: "5px 10px", 
        cursor: "pointer", 
        border: "none",
        borderRadius: "5px",
    },
    deleteBtn: {
        background: "red", 
        color: "white", 
        padding: "5px 10px", 
        cursor: "pointer", 
        border: "none",
        borderRadius: "5px",
    },
    saveBtn: {
        background: "green", 
        color: "white", 
        padding: "5px 10px", 
        cursor: "pointer", 
        border: "none",
        borderRadius: "5px",
    },
};

export default NthListEvent;
