import React, { Component } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
// import Goods from './components/Goods';
// import Cart from './components/Cart';
import Order from "./components/Order";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      // <div className="app">
      //   <header className="app__header">
      //     <Header />
      //   </header>
      //   <main class="app__main">
      //     <div class="app__goods">
      //       <Goods />
      //     </div>
      //     <div class="app__cart">
      //       <Cart />
      //     </div>
      //     <Routes>
      //     <Route path="/order" element={<Order />} />
      //   </Routes>
      //   </main>
      // </div>
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
          <Routes>
            <Route path="/home" element={<Home />}/>
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    );
  }
}

export default App;
