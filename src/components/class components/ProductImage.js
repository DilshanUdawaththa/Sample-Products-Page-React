import React from "react";

class ProductImage extends React.Component {
  render() {
    return (
      <>
        <img src={this.props.image} alt="productImage.jpg" />
      </>
    );
  }
}

export default ProductImage;
