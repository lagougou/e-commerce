import React, { Component } from 'react'
import Title from './Title' 
import CartColumns from './CartColumns'
import CartList from './CartList.js'
import { ProductConsumer } from '../context';
import CartTotals from './CartTotals'
export default class Cart extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0) {
                            return (
                              <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} />
                              </React.Fragment>                              
                            )
                        }else {
                            return (
                                <React.Fragment>
                                    <h1 className="text-center text-uppercase mt-5">your cart is empty</h1>
                                </React.Fragment>
                                )
                        }
                    }}
                </ProductConsumer>
               
            </div>
        )
    }
}
