import "./App.css";
import React, { useState } from "react";
import RadioBtn from "./components/RadioBtn";


const App = () => {
  
  const [value, setValue] = useState<string>("");

  const options = [
    {
      id: "1",
      name: "tax-classification",
      value: "Sole Proprietorship"
    },
    {
      id: "2",
      name: "tax-classification",
      value: "Partnership"
    },
    {
      id: "3",
      name: "tax-classification",
      value: "C Corporation"
    },
    {
      id: "4",
      name: "tax-classification",
      value: "S Corporation"
    },
    {
      id: "5",
      name: "tax-classification",
      value: "LLC"
    }
  ];

  return (
    <div className="app">
      <h1>Business Federal Tax Classification</h1>
      <p>The tax classification of the business</p>
      <RadioBtn
        options={options}
        value={value}
        setValue={setValue}
        />
    </div>
  );
};

export default App;
