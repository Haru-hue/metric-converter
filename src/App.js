import { useState } from 'react';
import './App.css';

function App() {
  const [unit, setUnit] = useState(0)

  const handleChange = (e) => {
    setUnit(e.target.value)
  }
  
  return (
    <main>
      <section className='title'>
        <h3>Metric/Imperial unit conversion</h3>
        <input type="text" placeholder='0' onChange={handleChange}></input>
      </section>
      <section className='conversion'>
          <div className='converter'>
              <h4><b>Length (Meter/Feet)</b></h4>
              <div className='row'>
                  <span>{unit} meters = {(unit*3.281).toFixed(3)} feet | {unit} feet = {(unit/3.281).toFixed(3)} meters</span>
              </div>
          </div>
          <div className='converter'>
            <h4><b>Volume (Liters/Gallons)</b></h4>
              <div className='row'>
                  <span>{unit} liters = {(unit/3.785).toFixed(3)} gallon | {unit} gallon = {(unit*3.785).toFixed(3)} liters</span>
              </div>
          </div>
          <div className='converter'>
            <h4><b>Mass (Kilograms/Pounds)</b></h4>
              <div className='row'>
                  <span>{unit} kilogram = {(unit*2.205).toFixed(3)} pound | {unit} pounds = {(unit/2.205).toFixed(3)} kilogram</span>
              </div>
          </div>
      </section>
    </main>
  );
}

export default App;
