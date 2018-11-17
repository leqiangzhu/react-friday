import React from 'react';
import getMasterKegList from '../services/TapList';


export default function MasterKegList () {
  const KegList = getMasterKegList();
 

  return (
    <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">name</th>
        <th scope="col">brewer</th>
        <th scope="col">description</th>
        <th scope="col">abv</th>
        <th scope="col">price</th>
        <th scope="col">remaining</th>
      </tr>
    </thead>
    <tbody>
      {KegList.map((Keg, index) =>    
       // <Schedule key={index} schedule = {Keg} />
        <tr>
        <td>{Keg.name}</td>
        <td>{Keg.brewer}</td>
        <td>{Keg.description}</td>
        <td>{Keg.abv}</td>
        <td>{Keg.price}</td>
        <td>{Keg.remaining}</td>
      </tr>
    
      )
      }
    </tbody>
    </table>

  );
  
}