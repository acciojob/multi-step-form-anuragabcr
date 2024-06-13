import React, { useState } from "react";
import Step from "./Step";

const App = () => {
  const [step, setStep] = useState(1);

  function handleButtonClick(e, action) {
    e.preventDefault();
    if (action === "next" && step < 3) {
      setStep(step + 1);
    } else if (action === "previous" && step > 1) {
      setStep(step - 1);
    }
  }
  return (
    <div>
      {step === 1 && (
          <Step 
            title="Customer Details"
            id1="first_name"
            id2="last_name"
            placeholder1="First Name"
            placeholder2="Last Name"
            handleButtonClick={handleButtonClick}
            step="step1"
          />
        )}
        {step === 2 && (
          <Step 
            title="Car Details"
            id1="model"
            id2="car_price"
            placeholder1="Car Model"
            placeholder2="Car Price"
            handleButtonClick={handleButtonClick}
            step="step2"
          />
        )}
        {step === 3 && (
          <Step 
            title="Payment Details"
            id1="card_info"
            id2="expiry_date"
            placeholder1="Card Info"
            placeholder2="Expiry Date"
            handleButtonClick={handleButtonClick}
            step="step3"
          />
        )}
    </div>
  );
};

export default App;