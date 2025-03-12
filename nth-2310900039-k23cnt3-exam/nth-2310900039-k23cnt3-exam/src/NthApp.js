import React, { useState } from "react";
import NthProductList from "./components/NthProductList";
import NthProductAdd from "./components/NthProductAdd";

const NthApp = () => {
  const [products, setProducts] = useState([
    { nthpid: "2310900039", nthpname: "Nguyễn Trọng Hưng", nthpquantity: "CNTT", nthpprice: "Vô giá " },
    { nthpid: "2", nthpname: "Điện thoại ", nthpquantity: "20", nthpprice: "800000" },
    { nthpid: "3", nthpname: "Tai nghe ", nthpquantity: "30", nthpprice: "500000" },
  ]);

  // Thêm sản phẩm mới
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  // Xóa sản phẩm
  const removeProduct = (nthpid) => {
    setProducts(products.filter(product => product.nthpid !== nthpid));
  };

  // Cập nhật sản phẩm
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product => (product.nthpid === updatedProduct.nthpid ? updatedProduct : product)));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-primary">Quản lý Sản Phẩm - Nguyễn Trọng Hưng - K23CNT3</h1>
      <NthProductAdd addProduct={addProduct} />
      <NthProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct} />
    </div>
  );
};

export default NthApp;