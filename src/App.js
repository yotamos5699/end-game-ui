import "./App.css";
import React, { useRef, useState } from "react";
import Menu from "./components/menu";
import Stats from "./components/stats";
import Script from "./components/script";
import Plan from "./components/plan";
import Contects from "./components/contects";

function App() {
  const [renderMennager, setRenderMennager] = useState({
    menu: true,
    stats: false,
    contects: false,
    plan: false,
    script: false,
  });
  const renderRef = useRef();
  const handleClick = (e) => {
    const render = Object.keys(renderMennager);
    let sc = {};
    render.forEach((key) => {
      if (key == e.target.name) {
        return (sc[key] = true);
      } else return (sc[key] = false);
    });
    renderRef.current = sc;
    console.log("render ref", renderRef.current);
    setRenderMennager(renderRef.current);
  };

  return (
    <div className="App">
      <h1>hiiiiii</h1>
      {renderMennager.menu && <Menu handleClick={handleClick} />}
      {renderMennager.stats && <Stats handleClick={handleClick} />}
      {renderMennager.contects && <Contects handleClick={handleClick} />}
      {renderMennager.script && <Script handleClick={handleClick} />}
      {renderMennager.plan && <Plan handleClick={handleClick} />}
    </div>
  );
}

export default App;
