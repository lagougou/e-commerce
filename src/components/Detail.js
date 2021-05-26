import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Detail extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} alt="product-img" className="img-fluid float-md-end" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-muted mt-3">made by: <span className="text-uppcase">{company}</span></h4>
                                    <h4 className="text-blue">
                                        price: <span>$</span>{price}
                                    </h4>
                                    <p className="text-capitalize fw-bold mt-3 mb-0">
                                        some info about product:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to product</ButtonContainer></Link>
                                        <ButtonContainer 
                                        cart
                                        disabled={inCart?true:false} onClick={() => {
                                            value.addToCart(id);
                                            // inCart = true;
                                        }}>{inCart?'inCart':'add to cart'}</ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
