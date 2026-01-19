import React, { useState } from "react";
const Form = ({ queryfunction, movie, setMovie }) => {
  const [inputvalue, setInputvalue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    queryfunction(inputvalue);
  };
  µ;
  const handlechange = (e) => {
    setInputvalue(e.target.value);
  };

  const topfiltert = () => {
    const sorted = [...movie].sort((a, b) => b.vote_average - a.vote_average);
    return setMovie(sorted);
  };

  const flopfilter = () => {
    const sorted = [...movie].sort((a, b) => a.vote_average - b.vote_average);
    return setMovie(sorted);
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form onSubmit={(e) => handlesubmit(e)}>
          <input type="text" onChange={handlechange} />
          <input type="submit" value="Recherche" />
          <div className="btn-sort-container">
            <span id="goodToBad">
              <strong className="topword" onClick={topfiltert}>
                top
              </strong>
              &#9650;
            </span>
            <span id="badToGood">
              &#9660;
              <strong className="flopword" onClick={flopfilter}>
                flop
              </strong>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
