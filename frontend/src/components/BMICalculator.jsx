import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please provide Height, Weight, and Gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning("You are UNDERWEIGHT. Consider seeking Dietician help.");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      toast.success("You are FINE. Keep working hard.");
    } else if (bmiValue > 24.9 && bmiValue < 29) {
      toast.warning("You are OVERWEIGHT. Consider seeking Dietician help.");
    } else {
      toast.error("You are OVERWEIGHT and in the OBESE range. RECOMMENDATION: Seek Dietician help.");
    }
  };

  return (
    <section className='bmi'>
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label htmlFor="height">Height (cm):</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="weight">Weight (kg):</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type='submit'>Calculate BMI</button>
          </form>
          {bmi && (
            <div>
              <h2>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI Chart" />
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default BMICalculator;
