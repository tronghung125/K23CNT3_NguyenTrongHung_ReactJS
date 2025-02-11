import "./App.css";
import NthCompInfor from "./components/NthCompInfor";

function App() {
  return (
    <div className="App">
      <h1>Nguyễn Trọng Hưng - K23CNT3 - ReactJS </h1>
      <hr />
      {/* Sử dụng component */}
      <NthCompInfor HoVaTen="Nguyễn Trọng Hưng" MaSV="2310900039" NgaySinh="01/02/2005" DienThoai="0329930596" TenLop="K23CNT3"/>
    </div>
  );
}

export default App;