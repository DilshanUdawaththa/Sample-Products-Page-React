import React from "react";

class TitleBox extends React.Component {
  render() {
    return (
      <>
        <h1 className="item_title">{this.props.title}</h1>
        <span className="item_no">Item No. {this.props.itemNo}</span>
      </>
    );
  }
}

export default TitleBox;
