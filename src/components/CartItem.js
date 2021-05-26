import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const {id, title, img, price, count, total } = this.props.item;
        const {decrement, increment, removeItem} = this.props.value
        return (
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} className="img-fluid" alt="product" style={{width:'5rem', height: '5rem'}} />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">
                        product: 
                    </span> {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <span className="d-lg-none">price: </span> {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => removeItem(id)}><i className="fas fa-trash"></i></div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                   <strong>item total : $ {total}</strong> 
                </div>
            </div>
        )
    }
}
