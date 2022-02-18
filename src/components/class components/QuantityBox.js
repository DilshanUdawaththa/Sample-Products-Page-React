import React from "react";

class QuantityBox extends React.Component {
  render() {
    return (
      <>
        <button>-</button>
        <input type="text" value="1"></input>
        <button>+</button>
      </>
    );
  }
}

export default QuantityBox;
