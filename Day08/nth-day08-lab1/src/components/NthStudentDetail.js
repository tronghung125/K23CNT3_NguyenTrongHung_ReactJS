import React from 'react';

const NthStudentDetail = ({ student, onClose }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Thông tin chi tiết</h3>
                <p><strong>Mã sinh viên:</strong> {student.nthID}</p>
                <p><strong>Họ tên:</strong> {student.nthStudentName}</p>
                <p><strong>Tuổi:</strong> {student.nthAge}</p>
                <p><strong>Giới tính:</strong> {student.nthGender}</p>
                <p><strong>Ngày sinh:</strong> {student.nthBirthday}</p>
                <p><strong>Nơi sinh:</strong> {student.nthBirthPlace}</p>
                <p><strong>Địa chỉ:</strong> {student.nthAddress}</p>
                <button className="btn btn-secondary" onClick={onClose}>Đóng</button>
            </div>
        </div>
    );
};

export default NthStudentDetail;