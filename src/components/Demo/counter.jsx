import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
     console .log(this.props);

    return (
      <div>
        {/* {this.props.children} */}

        <h1>Counter: {this.props.counter.id}</h1>

        <span>{this.state.value}</span>
        <button
          onClick={() => this._handleIncrement(this.props)}
          className="btn btn-primary btn-sm"
        >
          {" "}
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          {" "}
          Delete
        </button>

      

      </div>
    );
  }

  _handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
    console.log(product);
  };
}

export default Counter;
