import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();

    this.state = {
      sushiList: [],
      eatenSushi: [],
      currentSushiIdx: 0,
      amountMoney: 50
    };
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiData => {
        this.setState({
          sushiList: sushiData
        });
      });
  }

  addMoreSushi = () => {
    this.setState(currentState => {
      if (currentState.currentSushiIdx >= currentState.sushiList.length - 5) {
        return { currentSushiIdx: 0 };
      }
      return {
        currentSushiIdx: currentState.currentSushiIdx + 4
      };
    });
  };

  // eatSushi = sushiObj => {
  //   this.setState(copyOfCurrentEatenSushi => ({
  //     eatenSushi: [...copyOfCurrentEatenSushi.eatenSushi, sushiObj]
  //   }));
  // };

  eatSushi = sushiObj => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj]
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.state.sushiList}
          addMoreSushi={this.addMoreSushi}
          currentSushiIdx={this.state.currentSushiIdx}
          eatSushi={sushiObj => this.eatSushi(sushiObj)}
          eatenSushi={this.state.eatenSushi}
        />
        <Table
          eatenSushi={this.state.eatenSushi}
          sushiList={this.state.sushiList}
        />
      </div>
    );
  }
}

export default App;
