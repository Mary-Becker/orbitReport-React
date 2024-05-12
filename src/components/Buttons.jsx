import React from "react";

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  const handleAllSatellites = () => {
    setSat(satData);
  };

  return (
    <div>
      {orbitTypes.map((type, index) => (
        <button onClick={() => filterByType(type)} key={index}>
          {type} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;


// {orbitTypes.map((type, index) => {
//   return (
//     <button onClick={() => filterByType(sat)} key={index}>
//       {type} Orbit
//     </button>
//   );
// })}
//code continues