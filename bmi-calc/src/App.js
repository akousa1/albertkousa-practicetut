import './App.css';
import React, { useState } from 'react'

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0);
  const [bmiMessage, setBMIMessage] = useState("");

  const calcBMI = (e) => {
    e.preventDefault();
    let ConvertfromCM = height / 100
    let squaredHeight = Math.pow(ConvertfromCM, 2)
    let calculatedBMI = weight / squaredHeight;

    setBMI(calculatedBMI);
    
    if (calculatedBMI < 18.5) {
      setBMIMessage("You are Underweight, You need to eat more")
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setBMIMessage("You are at a healthy BMI")
    } 
    else if (calculatedBMI >= 25.0 && calculatedBMI < 29.9) {
      setBMIMessage("You are overweight, go on a diet")
    } 
    else if (calculatedBMI > 30) {
      setBMIMessage("You are obese, please see a doctor")
    } 

  }
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBMI}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              value={weight}
              placeholder="Enter Weight Value Here..."
              onChange={(e) => setWeight(e.target.value)}
            />
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter Height Value Here..."
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <button type='submit' className='btn btn-outline'>Calculate BMI</button>
          </div>
        </form>
      </div>
      <h1 style={{ textAlign: "center" }}>Your BMI is {BMI}</h1>
      <p style={{ textAlign: "center" }}>{bmiMessage}</p>
    </div>
  );
}

export default App;
