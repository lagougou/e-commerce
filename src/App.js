import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Default from './components/Default';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
