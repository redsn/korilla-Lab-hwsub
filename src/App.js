import React from "react";
import { useState } from "react";
import Form from './components/Form'
import Receipts from './components/Receipts'
import Data from './components/receiptData'

export default function App() {
  const [patron, setPatron] = useState(null);

  const findPatron = (search) => {
    setPatron(search)
    console.log(search);
  }
  return (
    <div className="App">
      <h1>Korrilla Receipts</h1>
      < Form findPatron={findPatron} />
      < Receipts receiptData={Data} />
    </div>
  );
}
