import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center gap-5">
        <h1>{this.state.count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded cursor-pointer"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
