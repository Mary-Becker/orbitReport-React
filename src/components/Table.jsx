import React from "react";

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
     </thead>
     <tbody>
        {sat.map((satellite) => (
          <tr key= {satellite.id}>
       <td>{satellite.name}</td>
       <td>{satellite.type}</td>
       <td>{satellite.launchDate}</td>
       <td>{satellite.operational ? "Operational" : "Non-operational"}</td>
     </tr>
        ))}
     
     </tbody>
   </table>
  );
};

export default Table;