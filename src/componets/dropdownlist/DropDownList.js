import React, { useState, useEffect } from "react";
import './DropDownList.css';

const getDropDownData = (value) =>
{
  const [hasError, setErrors] = useState(false);
  const [dropDown, setDropDown] = useState({});
  alert(value);
  
    if (value.length > 2) {
      fetch('https://marshaldb.midrealm.org/mid/dropdown.php')
      .json()
      .then(res = setDropDown)
      .catch(err => setErrors(err))
    }

}


function DropDownList() {

  return (
    <div>{JSON.stringify(dropDown)}</div>
  );
}

export default getDropDownData;