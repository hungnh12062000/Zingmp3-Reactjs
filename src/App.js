import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const { test } = useSelector(state => state.app);

  console.log(test);

  return (
    <div className="">
      app
    </div>
  );
}

export default App;
