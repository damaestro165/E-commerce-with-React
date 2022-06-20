import React from "react";
import StarRatings from "react-star-ratings";

class Carts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ carts: json, DataisLoaded: true });
      });
  }
  render() {
    const { DataisLoaded, carts } = this.state;
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
        <h4 className="border-bottom m-1 p-2">My Cart</h4>
        <div className="carts-container">
          {carts.map((cart) => (
            <div className="card product-cart" key={cart.id}>
              <img src={cart.image} className="card-img-top" alt="products" />
              <div className="card-body">
                <h5 className="card-title">{cart.title}</h5>
                <p className="card-text">{cart.description}</p>

                <div class="d-flex justify-content-between">
                  <a href="/#" className="btn btn-primary">
                    Check Out
                  </a>
                  <StarRatings
                    starRatedColor="rgb(82, 130, 114)"
                    rating={cart.rating.rate}
                    inumberOfStars={5}
                    starDimension="20px"
                    starSpacing="0px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Carts;
