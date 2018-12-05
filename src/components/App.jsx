import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TapList from './TapList';
import NewTapForm from './NewTapForm';
import Error404 from './Error404';
import Header from './Header';
import Home from './Home'

//import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [
        {
          name: "Ruby Zozzle",
          brewer: "Hi-Wheel",
          description: "Sparkling Wine & Grapefruit",
          abv: "6.8%",
          price: "7",
          remaining: "20"
        },
        {
          name: "Tart N Juicy",
          brewer: "Epic",
          description: "Sour IPA",
          abv: "4.5%",
          price: "6",
          remaining: "60"
        },
        {
          name: "Hamm's",
          brewer: "Miller/Coors",
          description: "American Lager",
          abv: "4.7%",
          price: "3",
          remaining: "65"
        },
        {
          name: "Prismatic",
          brewer: "Ninkasi",
          description: "Juicy IPA",
          abv: "5.9%",
          price: "6",
          remaining: "75"
        },
        {
          name: "Juicy Haze",
          brewer: "New Belgium",
          description: "India Pale Ale",
          abv: "7.5%",
          price: "6",
          remaining: "18"
        },
        {
          name: "8 Hop",
          brewer: "New Belgium",
          description: "Pale Ale",
          abv: "5.5%",
          price: "6",
          remaining: "58"
        }
      ]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
    this.handleSellTap = this.handleSellTap.bind(this);
  }

  handleAddingNewBeerToList(newTicket) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newTicket);
    this.setState({ masterKegList: newMasterKegList });
  }

  // handleEditingABeer(index) {
  //   let foundBeer = this.state.masterKegList[index];
  //   this.setState({
  //     currentlyEditingBeer: foundBeer,
  //     currentlyEditingStatus: true,
  //     currrentlyEditingIndex: index
  //   });
  // }

  // handleFinishEditingBeer(editedBeer) {
  //   let newMasterKegList = this.state.masterKegList.slice();
  //   newMasterKegList[this.state.currrentlyEditingIndex] = editedBeer;
  //   this.setState({
  //     masterKegList: newMasterKegList,
  //     currentlyEditingStatus: false,
  //     currentlyEditingBeer: null,
  //     currrentlyEditingIndex: null
  //   });
  // }

  handleSellTap(index) {
    let newMasterKegList = this.state.masterKegList.slice();
    let foundBeer = this.state.masterKegList[index];
    if (foundBeer.remaining > 0) {
      foundBeer.remaining--;
      newMasterKegList[index] = foundBeer;
      this.setState({ masterKegList: newMasterKegList });
    } else {
      foundBeer.remaining;
    }
  }

  // handleDeletingBeer(index) {
  //   var newMasterKegList = this.state.masterKegList.slice();
  //   newMasterKegList.splice(index, 1);
  //   this.setState({ masterKegList: newMasterKegList });
  // }

  render() {
    if (this.state.currentlyEditingStatus) {
      this.editFormView = (
        <EditBeer
          // // handleFinishEditingBeer={this.handleFinishEditingBeer}
          keg={this.state.currentlyEditingBeer}
        />
      );
    } else {
      this.editFormView = null;
    }

    return (
      <div>
        <style jsx>{`
          font-family: Helvetica;
        `}</style>
        <Header />

        <Switch>
        <Route exact path='/' component={Home} />

          <Route
            exact
            path="/menu"
            render={() => (
              <TapList
                // deleteBeer={this.handleDeletingBeer}
                sellPint={this.handleSellTap}
                beerList={this.state.masterKegList}
                // onEditingBeer={this.handleEditingABeer}
              />
            )}
          />

          <Route
            path="/newtap"
            render={() => (
              <NewTapForm onNewTapCreation={this.handleAddingNewBeerToList} />
            )}
          />
          <Route component={Error404} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
