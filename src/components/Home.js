import React, { Component } from "react";
import Goods from './Goods';
import Cart from './Cart';

class Home extends Component {
    render() {
        return (
            <main class="app__main">
                <div class="app__goods">
                    <Goods />
                </div>
                <div class="app__cart">
                    <Cart />
                </div>
            </main>
        );
    }
}

export default Home;