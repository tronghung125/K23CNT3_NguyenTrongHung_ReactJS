import React, { useState } from "react";
import NthProductList from "./components/NthProductList";
import NthProductAdd from "./components/NthProductAdd";

const NthApp = () => {
  const [products, setProducts] = useState([
    { nthpid: "230001", nthpname: "Laptop Dell", nthpquantity: "10", nthpprice: "1000000" },
    { nthpid: "230002", nthpname: "Điện thoại ", nthpquantity: "20", nthpprice: "800000" },
    { nthpid: "230003", nthpname: "Tai nghe ", nthpquantity: "30", nthpprice: "500000" },
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
      <h1 className="text-primary">Quản lý Sản Phẩm</h1>
      <NthProductList products={products} removeProduct={removeProduct} updateProduct={updateProduct} />
      <NthProductAdd addProduct={addProduct} />
    </div>
  );
};

export default NthApp;
