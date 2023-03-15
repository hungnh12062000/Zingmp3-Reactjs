import { useState } from "react";

function App() {

  const [work, setWork] = useState("");

  return (
    <div className="flex h-screen border border-red-400 justify-center items-center gap-4">
      <input type="text" onChange={(e) => setWork(e.target.value)} value={work} name="" className="outline-none border border-blue-600 rounded-md px-4 py-2 w-[30vw]" id="" />
      <button type="button" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white">
        Add
      </button>
    </div>
  );
}

export default App;
