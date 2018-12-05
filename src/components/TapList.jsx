import React from "react";
import PropTypes from "prop-types";
import Tap from "./Tap";

function TapList(props) {
  return (
    <div>
      <style jsx>{`
        
        table {
          margin: 40px auto;
          border-bottom: 1px solid black;
        }
      `}</style>
      <div class="container">
        <h1>Tap List</h1>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">brewer</th>
              <th scope="col">abv</th>
              <th scope="col">price</th>
              <th scope="col">remaining</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.beerList
              .map((keg, index) => (
                <Tap
                  name={keg.name}
                  brewer={keg.brewer}
                  description={keg.description}
                  abv={keg.abv}
                  price={keg.price}
                  remaining={keg.remaining}
                  index={index}
              //vote down
                
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array
};
export default TapList;
