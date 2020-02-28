import React from "react";
import { saveData } from "../modules/performanceData";

import coopercalculator from "../modules/cooperCalculator";


const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler
}) => {
  const result = coopercalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <>
          <p id="cooper-message">
            {age} y/o {gender} running {distance} meters.
          </p>
          <p id="cooper-result">Result: {result}</p>
          {authenticated && !entrySaved ? (
            <button
              id="save-result"
              onClick={() => saveData(result, entryHandler)}
            >
              Save entry
            </button>
          ) : (
            <p id="response-message">Your entry was saved</p>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;