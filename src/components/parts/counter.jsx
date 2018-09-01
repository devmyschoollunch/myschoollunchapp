import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value //initalize value
  };
  render() {
    return (
      <div>
        {this.props.children}


        <button
          onClick={() => this.onIncrement(this.props.Counter)}

          className="btn btn-primary btn-sm"
        >
          {" "}
          controlled state
        </button>

        <p>counter {this.state.value}</p>

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-primary btn-sm"
        >
          {" "}
          Delete
        </button>





      </div>
    );
  }
}

export default Counter;
