import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const AdviceSlip = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  const url = "https://api.adviceslip.com/advice";

  const getAllAdvice = async () => {
    await axios
      .get(url)
      .then(response => {
        const allAdvice = response.data.slip.advice;
        const id = response.data.slip.id;
        setAdvice(allAdvice);
        setId(id);
      })
      .catch(error => alert("data not found"));
  };

  useEffect(() => {
    getAllAdvice();
  }, []);

  return (
    <React.Fragment>
      <div className="advice">
        <h5 className="id">{`ADVICE # ${id}`}</h5>
        <h2 className="advice-message">{`"${advice}"`}</h2>
        <button className="button" onClick={getAllAdvice}>
          Generate
        </button>
      </div>
    </React.Fragment>
  );
};

export default AdviceSlip;
