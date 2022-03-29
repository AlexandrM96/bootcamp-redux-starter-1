import React, { Component } from "react";
import "../styles.css";
import { connect } from "react-redux";
import { removeGoodsToCar } from "./redux/action";

const mapDispatchToProps = dispatch => ({
  removeGoodsToCar: (id) => dispatch(removeGoodsToCar(id))// было removeToCardHandler
})

class CartItem extends Component {

  // removeToCardHandler = (id) => {
  //   console.log('click');
  //   store.dispatch({
  //     type: 'REMOVE_GOOD_TO_CART',
  //     payload: {
  //       id: id
  //     }
  //   })
  // };

  render() {
    const { title, price, id } = this.props;
    // было this.removeToCardHandler(id)
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$
        <button onClick={() => this.props.removeGoodsToCar(id)} className="cart__button">X</button> 
        </p>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CartItem);