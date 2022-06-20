import { Component } from "react";
import StarRatings from "react-star-ratings";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ items: json, DataisLoaded: true });
      });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden m-5">Loading...</span>
          </div>
        </div>
      );
    return (
      <div>
        <h4 className="border-bottom m-1 p-2">
          Products
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-success" onClick={this.onRefresh}>
            Refresh
          </button>
        </h4>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Products</th>
              <th>Price</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>

                  <td>
                    <img
                      src={item.image}
                      alt="customer"
                      className="product-image"
                    />
                  </td>
                  <td className="product-title">{item.title}</td>
                  <td> $ {item.price}</td>
                  <td>
                    {" "}
                    <StarRatings
                      starRatedColor="rgb(82, 130, 114)"
                      rating={item.rating.rate}
                      inumberOfStars={5}
                      starDimension="20px"
                      starSpacing="0px"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  onRefresh = () => {};
}
