import React, { useState } from "react";
const Form = ({ queryfunction }) => {
  const [inputvalue, setInputvalue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    queryfunction(inputvalue);
  };

  const handlechange = (e) => {
    setInputvalue(e.target.value);
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form onSubmit={(e) => handlesubmit(e)}>
          <input type="text" onChange={handlechange} />
          <input type="submit" value="Recherche" />
          <div className="btn-sort-container">
            <span id="goodToBad">
              <strong className="topword">top</strong>&#9650;
            </span>
            <span id="badToGood">
              &#9660;<strong className="flopword">flop</strong>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
