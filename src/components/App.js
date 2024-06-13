import React, { useState } from 'react';
import Step from './Step';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="multi-step-form">
      <Step 
        step={currentStep} 
        onNext={handleNext} 
        onPrev={currentStep > 1 && handlePrev}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
