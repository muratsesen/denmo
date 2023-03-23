import { useState } from "react";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <div className={`element ${open ? 'expanded':''}`}>
        <span onClick={()=>setOpen(p=>!p)}>{open ? '-':'+'}</span>
       {open && 
       <>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
       </>}
      </div>
      <div className="element2"></div>
    </div>
  );
}

export default App;
