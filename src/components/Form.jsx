import React from "react";
const Form = () => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form action="#">
          <input type="text" />
          <input type="submit" value="Recherche" />
          <div className="btn-sort-container">
            <span id="goodToBad"><strong className="topword">top</strong>&#9650;</span>
            <span id="badToGood">&#9660;<strong className="flopword">flop</strong></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
