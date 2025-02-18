import NthClassComp from "./components/NthClassComp";
import NthFuncComp from "./components/NthFuncComp";
import NthFuncComp1 from "./components/NthFuncComp1";

function NthApp() {
  // Object
  const users = {
    fullname: 'Nguyễn Văn A',
    age: 30,
    phone: 1233333
  }
  return (
    <div className="container border mt-3 bg-white">
      <h1>Demo Components - Props - State</h1>
      <hr />
      <div className='alert alert-danger'>
        <NthFuncComp name="Trọng Hưng" address="Hà Nội" company="ĐH Nguyễn Trãi" note="Đẹp zai" />
        <hr />
        <NthFuncComp name="Trọng Hưng" address="Gia Lâm" company="ĐH Nguyễn Trãi" note="Hihi" />
      </div>
      <div className='alert alert-infor'>
        <NthFuncComp1 renderInfo={users} />
      </div>
      <NthClassComp />
      {/*Chuyển dữ liệu từ NthApp -> NthClassComp*/}
      <NthClassComp renderName="K23CNT3" renderUsers={users}/>
    </div>
  );
}

export default NthApp;
