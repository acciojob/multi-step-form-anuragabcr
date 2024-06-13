import React, {useState} from 'react';

const Step = ({ step, onNext, onPrev, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    model: '',
    car_price: '',
    card_info: '',
    expiry_date: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <label htmlFor="first_name">First Name:</label>
            <input type="text" id="first_name" name="firstName" onChange={handleChange} />
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" id="last_name" name="lastName" onChange={handleChange} />
          </>
        );
      case 2:
        return (
          <>
            <label htmlFor="model">Car Model:</label>
            <input type="text" id="model" name="model" onChange={handleChange} />
            <label htmlFor="car_price">Car Price:</label>
            <input type="number" id="car_price" name="car_price" onChange={handleChange} />
          </>
        );
      case 3:
        return (
          <>
            <label htmlFor="card_info">Card Information:</label>
            <input type="text" id="card_info" name="card_info" onChange={handleChange} />
            <label htmlFor="expiry_date">Expiry Date:</label>
            <input type="date" id="expiry_date" name="expiry_date" onChange={handleChange} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderStepContent()}
      <br />
      {step > 1 && <button type="button" onClick={onPrev}>Previous</button>}
      {step < 3 && <button type="button" onClick={onNext}>Next</button>}
      {step === 3 && <button type="submit">Submit</button>}
    </form>
  );
};

export default Step;
