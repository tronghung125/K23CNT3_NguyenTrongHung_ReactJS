import React, { useState } from "react";

const NthProductList = ({ products, removeProduct, updateProduct }) => {
  const [editProductId, setEditProductId] = useState(null);
  const [updatedInfo, setUpdatedInfo] = useState({ nthpname: "", nthpquantity: "", nthpprice: "" });

  // Bắt đầu chỉnh sửa
  const handleEdit = (product) => {
    setEditProductId(product.nthpid);
    setUpdatedInfo({ nthpname: product.nthpname, nthpquantity: product.nthpquantity, nthpprice: product.nthpprice });
  };

  // Lưu thông tin sau khi chỉnh sửa
  const handleUpdate = () => {
    updateProduct({ nthpid: editProductId, ...updatedInfo });
    setEditProductId(null); // Đóng chế độ chỉnh sửa
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Danh sách Sản Phẩm</h2>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.nthpid} className="list-group-item d-flex justify-content-between align-items-center">
            {editProductId === product.nthpid ? (
              // Hiển thị form chỉnh sửa
              <>
                <input type="text" className="form-control me-2" value={updatedInfo.nthpname} onChange={(e) => setUpdatedInfo({ ...updatedInfo, nthpname: e.target.value })} />
                <input type="number" className="form-control me-2" value={updatedInfo.nthpquantity} onChange={(e) => setUpdatedInfo({ ...updatedInfo, nthpquantity: e.target.value })} />
                <input type="number" className="form-control me-2" value={updatedInfo.nthpprice} onChange={(e) => setUpdatedInfo({ ...updatedInfo, nthpprice: e.target.value })} />
                <button className="btn btn-success me-2" onClick={handleUpdate}>Lưu</button>
                <button className="btn btn-secondary" onClick={() => setEditProductId(null)}>Hủy</button>
              </>
            ) : (
              // Hiển thị thông tin sản phẩm
              <>
                {product.nthpname} - Số lượng: {product.nthpquantity} - Giá: {product.nthpprice}đ
                <div className="d-flex gap-1">
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(product)}>Sửa</button>
                  <button className="btn btn-danger" onClick={() => removeProduct(product.nthpid)}>Xóa</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NthProductList;
