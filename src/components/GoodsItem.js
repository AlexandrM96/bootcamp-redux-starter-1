import React, { Component } from "react";
// import store from './redux/store';
import { addGoodToCart } from "./redux/action";
import "../styles.css";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  addGoodToCart: (id) => dispatch(addGoodToCart(id))
})

class GoodsItem extends Component {

  // addToCardHandler = (id) => {
  //   store.dispatch({
  //     type: 'ADD_GOOD_TO_CART',
  //     payload: {
  //       id: id
  //     }
  //   })
  // };
  // addToCardHandler = (id) => {
  //   store.dispatch(addGoodToCart(id));
  // }

  render() {
    const { title, description, price, id } = this.props;

    return (
      <div className="goods-item" key={id}>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_old">{price * 1.2}.00$ </span>
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00$</span>
        </p>
        <p className="goods-item__description">{description}</p>
        <button onClick={() => this.props.addGoodToCart(id)} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(GoodsItem);