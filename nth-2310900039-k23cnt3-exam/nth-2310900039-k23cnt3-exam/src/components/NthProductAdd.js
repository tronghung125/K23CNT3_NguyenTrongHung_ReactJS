import React, { useState } from "react";

const NthProductAdd = ({ addProduct }) => {
  const [newProduct, setNewProduct] = useState({ nthpid: "", nthpname: "", nthpquantity: "", nthpprice: "" });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.nthpid && newProduct.nthpname && newProduct.nthpquantity && newProduct.nthpprice) {
      addProduct(newProduct);
      setNewProduct({ nthpid: "", nthpname: "", nthpquantity: "", nthpprice: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="nthpid" placeholder="ID" value={newProduct.nthpid} onChange={handleChange} required />
        <input type="text" className="form-control" name="nthpname" placeholder="Tên Sản Phẩm" value={newProduct.nthpname} onChange={handleChange} required />
        <input type="number" className="form-control" name="nthpquantity" placeholder="Số Lượng" value={newProduct.nthpquantity} onChange={handleChange} required />
        <input type="number" className="form-control" name="nthpprice" placeholder="Giá" value={newProduct.nthpprice} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Thêm</button>
      </form>
    </div>
  );
};

export default NthProductAdd;
