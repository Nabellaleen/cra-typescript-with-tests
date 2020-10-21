import * as React from "react";
import "./styles.css";

export default function App() {
  const [highlight, setHighlight] = React.useState(false);
  return (
    <div className="App">
      <h1 className={highlight ? "highlight" : undefined}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setHighlight((highlight) => !highlight)}>
        Highlight !
      </button>
    </div>
  );
}
