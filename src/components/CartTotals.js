import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartTotals extends Component {
    render() {
        const { clearCart, cartSubtotal, cartTotal, cartTaxt} = this.props.value;
        return (
            
           <React.Fragment>
               <div className="container">
                   <div className="row">
                        <div className="col-md-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-end  align-self-end">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                    clear cart
                                </button>
                            </Link>
                            <h5>
                                <span className="text-title">
                                    subtotal:
                                <strong>${cartSubtotal}</strong>
                                </span>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    taxt:
                                <strong>${cartTaxt}</strong>
                                </span>
                            </h5>
                            <h5>
                                <span className="text-title">
                                    total:
                                <strong>${cartTotal}</strong>
                                </span>
                            </h5>
                       </div>
                   </div>
               </div>
           </React.Fragment>   
        )
    }
}
