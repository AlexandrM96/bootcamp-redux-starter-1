import React, { Component } from "react";
import "../styles.css";
import store from './redux/store';
import CartItem from './CartItem';
import { connect } from "react-redux";
import {Link} from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    cartGoods: state.cart
  }
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
       isValid: true,
    }
  }
  // state = {
  //   cartGoods: state.cart
  // }

  getTotal() {
    const { cartGoods } = this.props;
    return cartGoods.reduce((acc, item) => acc + item.price, 0);
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     const state = store.getState();
  //     this.setState({
  //       cartGoods: state.cart
  //     });
  //   });
  // }
  
  
  handleClick = () => {
    // <Link className="cart__button-Link" to="/Order">Оформить</Link>
    // window.location.assign('http://localhost:3000/order');
  };

  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        {this.props.cartGoods.length ?
          <ul className="cart__list">
            {this.props.cartGoods.map((item) => (
              //вместо index было item.id 
              <li className="cart__list-item" key={item.id}> 
                <CartItem {...item} />
              </li>
            ))}
          </ul>
          :
          <p className="cart__note">Nothing in the cart now</p>
        }
        <p className="cart__total">Total: {this.getTotal()}.00$</p>
        <button disabled={+this.getTotal() === 0} onClick={this.handleClick} className={+this.getTotal() === 0 ? 
          "cart__button-order-two": "cart__button-order" }>
          <Link className="cart__button-Link" to="/Order">Оформить</Link>
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);