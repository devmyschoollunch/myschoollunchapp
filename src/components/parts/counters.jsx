import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    items: [
      { id: 1, value: 10 },
      { id: 2, value: 11 },
      { id: 3, value: 12 },
      { id: 4, value: 13 }
    ]
  };

  _handleReset = () => {
    const counters = this.state.items.map(c => {
      c.value = 0;
      return c;
    });

    this.setState(counters);
  };

  _onIncrement = counter => {
    const deleteItems = [...this.state.counters]; // ... is a spread operator which  clones the object
    const index = deleteItems.indexOf(counter);
    deleteItems[index] = { ...counter };
    deleteItems[index].index.value++;
    this.setState({ deleteItems });
  };

  render() {
    return (
      <div>
        <button onClick={this._handleReset} className="btn btn-primary btn-lg">
          {" "}
          Reset
        </button>

        {this.state.items.map(item => (
          <Counter
            onDelete={this._deleteChildComponent}
            key={item.id}
            value={item.value}
          >
            <h4>{item.id}</h4>
          </Counter>
        ))}

        {this.state.items.map(item => (
          <Counter
            onDelete={this._deleteChildComponent}
            onIncrement={this._onIncrement}
            item={item}
          />
        ))}
      </div>
    );
  }

  _deleteChildComponent = itemID => {
    console.log(itemID);
    const deleteItems = this.state.items.filter(c => c.id !== itemID);

    this.setState({ items: deleteItems });
  };
}

export default Counters;
