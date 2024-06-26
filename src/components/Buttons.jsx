import React from "react";
import satData from "./satData";
import "./styling.css"


const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  const handleAllSatellites = () => {
    setSat(satData);
  };

  return (
    <div className= "flex-container">
      {orbitTypes.map((type, index) => (
        <button onClick={() => filterByType(type)} key={index}>
          {type} Orbit
        </button>
      ))}
      <button onClick = {handleAllSatellites}>All Orbits</button>
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