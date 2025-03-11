import React, { useState } from "react";

const NthUseStateListObject = () => {
  const [students, setStudents] = useState([
    { id: "SV001", name: "Nguyễn Trọng Hưng", age: 20, class: "K23CNT3" },
    { id: "SV002", name: "Nguyễn Gia Duy", age: 23, class: "K23CNT1" },
    { id: "SV003", name: "Nguyễn Minh Tuấn", age: 21, class: "K23CNT1" },
    { id: "SV004", name: "Nguyễn Quang Minh", age: 23, class: "K23CNT1" }
  ]);

  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({ id: "", name: "", age: "", class: "" });

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleEdit = (student) => {
    setEditingStudent(student.id);
    setFormData(student);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setStudents(students.map(student => student.id === formData.id ? formData : student));
    setEditingStudent(null);
  };

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Sửa</button>
                <button onClick={() => handleDelete(student.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingStudent && (
        <div>
          <h3>Chỉnh sửa sinh viên</h3>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          <input type="text" name="class" value={formData.class} onChange={handleChange} />
          <button onClick={handleSave}>Lưu</button>
          <button onClick={() => setEditingStudent(null)}>Hủy</button>
        </div>
      )}
    </div>
  );
};

export default NthUseStateListObject;
