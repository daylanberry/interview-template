import React, { useState } from "react";
import "./App.css";

import DropdownGroup from "./components/DropdownGroup";

//What is this line doing?
export default function App() {
  //what is the useState hook doing here?
  const [dropdownOptions, setDropdownOptions] = useState({
    sports: [
      {
        label: "Baseball",
        value: "baseball",
      },
      {
        label: "Football",
        value: "football",
      },
      {
        label: "Hockey",
        value: "hockey",
      },
    ],
    fruits: [
      {
        label: "Apple",
        value: "apple",
      },
      {
        label: "Orange",
        value: "orange",
      },
      {
        label: "Banana",
        value: "banana",
      },
    ],
    vegetables: [
      {
        label: "Broccoli",
        value: "broccoli",
      },
      {
        label: "Cauliflower",
        value: "cauliflower",
      },
      {
        label: "Zuchinni",
        value: "zuchinni",
      },
    ],
  });

  const handleOptionSwitch = () => {
    //write a function to replace the selected option in dropdown y with an object made
    //from the text box value
    //example dropdown x: fruits dropdown y: apple textbox: test
    //result
    /*    fruits: [
      {
        label: "test",
        value: "test"
      },
      {
        label: "Orange",
        value: "orange"
      },
      {
        label: "Banana",
        value: "banana"
      }
    ],*/
  };

  return (
    <DropdownGroup
      dropdownOptions={dropdownOptions}
      handleOptionSwitch={handleOptionSwitch}
    />
  );
}
