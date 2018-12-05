import React from "react";


function Tap(props) {
  function handleSellTap() {
    props.onSellTap(props.index);
  }
 
  return (
    <tr class="row">
      <style jsx>{`
        .row {
          margin: 40px auto;
        }
        td{
          border-style: solid;

      }
      `}</style>
      <td>{props.name}</td>
      <td>{props.brewer}</td>
      <td>{props.abv}</td>
      <td>${props.price}</td>
      <td>{props.remaining}</td>
      <td>
        <button className="btn btn-success" onClick={handleSellTap}>
          Sell
        </button>
        
      </td>
    </tr>
  );
}

export default Tap;
