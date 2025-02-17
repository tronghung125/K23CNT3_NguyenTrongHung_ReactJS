import NthClassComp from "./components/NthClassComp";
import NthFuncComp from "./components/NthFuncComp";
import NthJsxExpression from "./components/NthJsxExpression";

function nthApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson 03 - Nguyễn Trọng Hưng </h1>
      <NthJsxExpression />

      {/*Sử dụng Funtion Components */}
      <NthFuncComp />
      {/*Sử dụng Class Components */}
      <NthClassComp />
    </div>
  );
}

export default nthApp;
