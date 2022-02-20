import React from "react";

class QuantityBox extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.decreaseQuantity}>-</button>
        <input
          type="text"
          placeholder="1"
          value={String(this.props.quantity)}
          readOnly
        ></input>
        <button onClick={this.props.incrementQuantity}>+</button>
      </>
    );
  }
}

export default QuantityBox;
