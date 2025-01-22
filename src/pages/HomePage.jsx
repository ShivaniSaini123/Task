import { useState } from 'react';
import './HomePage.css';
import logo from '../assets/logo3.png'; // Import the image here

const HomePage = () => {
  const [gridColors, setGridColors] = useState(Array(9).fill('blue'));
  const [clickOrder, setClickOrder] = useState([]);

  const handleSquareClick = (index) => {
    if (index === 8) {
      // Reset all squares to blue in click order
      const newColors = Array(9).fill('blue');
      clickOrder.forEach((i) => (newColors[i] = 'blue'));
      setGridColors(newColors);
      setClickOrder([]);
    } else {
      // Change clicked square to red
      const newColors = [...gridColors];
      newColors[index] = 'red';
      setGridColors(newColors);
      setClickOrder([...clickOrder, index]);
    }
  };

  return (
    <div className="home-container">
      <div className="section gradient"></div>
      <div className="section logo">
        {/* Use the imported image */}
        <img src={logo} alt="E-Cell Logo" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="section grid">
        {gridColors.map((color, index) => (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor: color }}
            onClick={() => handleSquareClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
