import React, { useState } from "react";

const DropdownGroup = ({ dropdownOptions = {}, handleOptionSwitch }) => {
  const [replaceTerm, setReplaceTerm] = useState("");
  const [firstDropdownOption, setFirstDropdownOption] = useState("");
  const [secondDropdownOption, setSecondDropdownOption] = useState("");

  return (
    <div>
      {/* todo: display the dropdownOptions keys as a list with nested bullet points rendering the corresponding values  */}

      {/* todo: create a dropdown menu (dropdown x) that contains the dropdownOptions entries ex: (sports, fruits, vegetables) */}
      {/* todo: onChange updates firstDropdownOption to selected entry */}

      {/* todo: create a second dropdown menu (dropdown y) that contains the selected entry's labels, ex: if "sports" is selected then (Baseball, Football, Hockey) are options    */}
      {/* todo: onChange updates secondDropdownOption label */}

      {/* todo: under the second dropdown menu, create an input box with the placeholder "updated value" */}
      {/* todo: onChange updates replaceTerm */}

      {/* todo: create a button with the text "replace" that has the click event handleOptionSwitch */}
    </div>
  );
};

export default DropdownGroup;
