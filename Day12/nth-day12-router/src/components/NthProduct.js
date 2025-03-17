import React from "react";

export default function NthProduct() {
  const products = [
    { id: 1, name: "Suzuki GD110", price: "35,000,000đ", image: "https://photo.znews.vn/w1200/Uploaded/neg_estpyge/2018_09_07/6KawasakiZ900RS_Zing.jpg" },
    { id: 2, name: "HJ125K-A", price: "32,990,000đ", image: "https://photo.znews.vn/w1200/Uploaded/neg_estpyge/2018_09_07/BMWR9TRacer_Zing_13.jpg" },
    { id: 3, name: "SYM Wolf 125", price: "7,490,000đ", image: "https://photo.znews.vn/w1200/Uploaded/neg_estpyge/2018_09_07/Triumph_Thruxton_1200R_zing_15.jpg" },
  ];

  const handleBuyNow = (productName) => {
    alert(`🛒 Bạn đã chọn mua: ${productName}`);
  };

  const containerStyle = { textAlign: "center", padding: "20px" };
  const gridStyle = { display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" };
  const cardStyle = { width: "250px", border: "1px solid #ddd", borderRadius: "10px", overflow: "hidden", boxShadow: "2px 2px 10px rgba(0,0,0,0.2)", textAlign: "center", background: "#fff" };
  const imageStyle = { width: "100%", height: "auto" };
  const contentStyle = { padding: "15px" };
  const buttonStyle = { padding: "10px 15px", background: "#28a745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "10px" };

  return (
    <div style={containerStyle}>
      <h2>🛍️ Danh Sách Sản Phẩm</h2>
      <div style={gridStyle}>
        {products.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <div style={contentStyle}>
              <h3>{product.name}</h3>
              <p style={{ fontWeight: "bold", color: "#d9534f" }}>{product.price}</p>
              {/* Nút Mua Ngay với sự kiện onClick */}
              <button style={buttonStyle} onClick={() => handleBuyNow(product.name)}>Mua Ngay</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
