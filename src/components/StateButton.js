import React from "react";

export default class StateButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  updateCount() {
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 };
    });
  }
  resetCount() {
    this.setState(() => {
      return { count: 100 };
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.updateCount()}>
          Clicked {this.state.count} times
        </button>
        <button onClick={() => this.resetCount()}>
          Reset
        </button>
      </div>
    );
  }
}
