import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [receipt, setReceipt] = useState(null);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
