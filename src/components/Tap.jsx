import React from 'react';
import getMasterKegList from '../services/TapList';


export default function Tap (props) {
  function handleSellTap(){
    props.onSellTap(props.index)
  }
  const masterKegList = getMasterKegList();
 

  return (
     <div className="taplist">
       <style jsx>{`
        table {
            font-size:30px;
            postion:center;
           
            border-style: solid;
       
        }
        td{
            border-style: solid;

        }
        img {
          top:0;
         width:100%;
        }
      `}</style>

      <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">name</th>
        <th scope="col">brewer</th>
        <th scope="col">description</th>
        <th scope="col">abv</th>
        <th scope="col">price</th>
        <th scope="col">remaining</th>
        <th scope="col">sell</th>
      </tr>
    </thead>
    <tbody>
      {masterKegList.map((Keg, index) =>    
       // <Schedule key={index} schedule = {Keg} />
       <tr key={index}>
        <td>{Keg.name}</td>
        <td>{Keg.brewer}</td>
        <td>{Keg.description}</td>
        <td>{Keg.abv}</td>
        <td>{Keg.price}</td>
        <td>{Keg.remaining}</td>
        <td> <button onClick={handleSellTap}>
          Sell
        </button></td>
      </tr>
      )
      }
    </tbody>
    </table>
     </div>
   

  );
  
}
        
        