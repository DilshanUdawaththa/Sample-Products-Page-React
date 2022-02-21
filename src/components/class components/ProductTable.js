import React from "react";

class ProductTable extends React.Component {
  render() {
    return (
      <>
        <table className="product_table">
          <thead>
            <tr>
              <th>Item No</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.props.tableDetails.map((array) => (
              <tr key={array.id}>
                <td>{array.itemNo}</td>
                <td>{array.title}</td>
                <td>{String(array.quantity)}</td>
                <td>
                  {array.currencySymbol}
                  {String(array.amount)}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => this.props.deleteRow(array.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ProductTable;
