import React, { useState } from 'react';

const Grid = () => {
  const [squares, setSquares] = useState(Array(9).fill('blue'));
  const [clickSequence, setClickSequence] = useState([]);

  const handleSquareClick = (index) => {
    const newSquares = [...squares];
    newSquares[index] = newSquares[index] === 'blue' ? 'red' : 'blue';
    setSquares(newSquares);

    if (index === 8) {
      setClickSequence([...clickSequence, ...newSquares]);
    }
  };

  React.useEffect(() => {
    if (clickSequence.length > 0) {
      setSquares([...clickSequence]);
    }
  }, [clickSequence]);

  return (
    <div className="grid">
      {squares.map((color, index) => (
        <div
          key={index}
          className="square"
          style={{ backgroundColor: color }}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Grid;
