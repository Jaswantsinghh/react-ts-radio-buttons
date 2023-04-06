import "./App.css";
import React, { useState } from "react";
import RadioButton from "./components/RadioButton";


const App = () => {
  
  const [value, setValue] = useState<string>("");

  const options = [
    {
      id: "1",
      name: "tax-classification",
      value: "C Corporation"
    },
    {
      id: "2",
      name: "tax-classification",
      value: "S Corporation"
    },
    {
      id: "3",
      name: "tax-classification",
      value: "Partnership"
    },
    {
      id: "4",
      name: "tax-classification",
      value: "Trust"
    },
    {
      id: "5",
      name: "tax-classification",
      value: "Disregarded Entity"
    },
    {
      id: "6",
      name: "tax-classification",
      value: "Other"
    },
  ];

  return (
    <div className="app">
      <h1>Business Federal Tax Classification</h1>
      <p>The tax classification of the business.</p>
      <RadioButton
        options={options}
        value={value}
        setValue={setValue}
        />
    </div>
  );
};

export default App;
