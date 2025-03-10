import React from "react";
import NthEffect1 from "./components/NthEffect1";
import NthUseState from "./components/NthUseState";
import NthUseStateListObject from "./components/NthUseStateListObject";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-center">Nguyễn Trọng Hưng - ReactJS Hook</h1>
      <NthUseState />
      <NthUseStateListObject />
      <NthEffect1 />
    </div>
  );
};

export default App;