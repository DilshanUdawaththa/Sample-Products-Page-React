import React from "react";

class PrizingBox extends React.Component {
  render() {
    return (
      <>
        <span className="item_price">
          {this.props.currencySymbol}
          {this.props.priceBegin}
          <sup>{this.props.priceLast}</sup>
        </span>
      </>
    );
  }
}

export default PrizingBox;
