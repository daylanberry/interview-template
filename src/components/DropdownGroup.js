import React, { useState } from "react";
import PropTypes from "prop-types";

// TODO
// write two dropdown menus
// the first dropdown menu will contain the titles  ex: (sports, fruits, vegetables)
// the second dropdown will contain a list of categories which will be dynamically displayed depending on the selected title
// example: if sports is selected in the first dropdown, then the second dropdown should have (Baseball, Football, Hockey) as options
const DropdownGroup = ({ dropdownOptions = {}, handleOptionSwitch }) => {
  //What are lines 21-23 doing? What do the empty strings mean?
  const [replaceTerm, setReplaceTerm] = useState("");
  const [firstDropdownOption, setFirstDropdownOption] = useState("");
  const [secondDropdownOption, setSecondDropdownOption] = useState("");

  return (
    <div>
      {Object.keys(dropdownOptions).map((option) => {
        return (
          <div>
            <p>{option}</p>
            <ul>
              {dropdownOptions[option].map((op) => {
                return <li> {op.label}</li>;
              })}
            </ul>
          </div>
        );
      })}
      {/* todo: create a dropdown menu (dropdown x) that contains the titles as options  ex: (sports, fruits, vegetables) */}

      {/* todo: create a second dropdown menu (dropdown y) that contains the selected title's options, ex: if sports is selected then (Baseball, Football, Hockey) are options    */}

      {/* create a button with the text "replace" that has the click event handleOptionSwitch */}
    </div>
  );
};

//What is this line doing?
export default DropdownGroup;
