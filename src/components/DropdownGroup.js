import React, { useState } from "react";

const DropdownGroup = ({ dropdownOptions = {}, handleOptionSwitch }) => {
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
      {/* onChange updates firstDropdownOption */}

      {/* todo: create a second dropdown menu (dropdown y) that contains the selected title's options, ex: if sports is selected then (Baseball, Football, Hockey) are options    */}
      {/* todo: onChange updates firstDropdownOption */}

      {/* todo: create an input box with the placeholder "updated value" */}
      {/* todo: onChange updates replaceTerm */}

      {/* create a button with the text "replace" that has the click event handleOptionSwitch */}
    </div>
  );
};

export default DropdownGroup;
