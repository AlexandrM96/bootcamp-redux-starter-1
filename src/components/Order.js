import React, { Component } from "react";
import "../styles.css";
import store from './redux/store';
import CartItem from './CartItem';
import { connect } from "react-redux";
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css'
import validator from 'validator' 

const mapStateToProps = (state) => {
  return {
    cartGoods: state.cart
  }
}




class Order extends Component {
  // state = {
  //   cartGoods: state.cart
  // }
  constructor(props) {
    super(props);
    this.state = {
      nameUser: "",
      familyUser: "",
      numberUser: "",
      e_mailUser: "",
      address: "",
      info: "",
      btnCl: "btn_a",
      isValid: false,
    }
  }

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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state.address)
    if (
      (this.state.nameUser.length > 0 &&
      e.target.value) &&
      (this.state.familyUser.length > 0 &&
      e.target.value) &&
      (this.state.numberUser.length > 0 &&
      e.target.value) &&
      (this.state.e_mailUser.length > 0 &&
      e.target.value) &&
      (this.state.info.length > 0 &&
      e.target.value)
      
    ) {
      this.setState({
        isValid: true,
        btnCl: "btn_b"
      });
    } else {
      this.setState({
        isValid: false,
        btnCl: "btn_a"
      });
      console.log("Ошибка");
    }
  };

  
  handleClick = (e) => {
    alert(`  
      Имя: ${this.state.nameUser}
      Фамилия: ${this.state.familyUser}
      Телефон: ${this.state.numberUser}
      E-mail: ${this.state.e_mailUser} 
      Адрес: ${this.state.address.value}
      Информация о заказе: ${this.state.info}
      Оплачено! 
      `);
  };

  render() {
    return (
      <main>
        <div className={+this.getTotal() === 0 ? "cart-alert" : "cart-alert-two"}>
          <h1>
            Корзина Пуста!
          </h1>
        </div>
        <section className={+this.getTotal() === 0 ? 'app__main-two' : 'app__main'}>
          <div className="app__cart">
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
            </div>
          </div>
          <form className="form_user">
            Имя
            <input
              onChange={this.handleChange}
              className="input_user"
              name="nameUser"
              type="text"
            />
            Фамилия
            <input
              onChange={this.handleChange}
              className="input_user"
              name="familyUser"
              type="text"
            />
            Телефон
            <input
              onChange={this.handleChange}
              className="input_user"
              name="numberUser"
              type="number"
            />
            E-Mail
            <input
              onChange={this.handleChange}
              className="input_user"
              name="e_mailUser"
              type="text"
            />
            Адрес
            <AddressSuggestions token="986936493a20e3e2a57d28de48b5cf47bcf9a635" value={this.state.address}
              onChange={(e) => { this.setState({ address: e }) }} />
            Комментарий к заказу
            <textarea
              className="input_user text_aria"
              id="info"
              name="info"
              rows="5"
              cols="30"
              onChange={this.handleChange}
            ></textarea>
            <button
              className={this.state.btnCl}
              // className='btn_a'
              disabled={!this.state.isValid}
              onClick={this.handleClick}
              type="submit"
            >
              Оплатить
            </button>
          </form>
        </section>
      </main>

    );
  }
}

export default connect(mapStateToProps)(Order);