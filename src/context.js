import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data.js';
const ProductContext = React.createContext();
// provider
// Consumer


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        cartSubtotal: 0,
        cartTotal: 0,
        cartTaxt: 0,
    };

    componentDidMount() {
        this.setProducts()
    }
    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            products = [...products, singleItem]
        
        })
        this.setState( () => {
            return {products}
        })
    }
    handleDetail = (id) => {
        this.state.products.forEach((item) => {
            if(item.id === id){
                this.setState(() =>{
                    return {detailProduct: item}
                })
            }
        })
    }
    getProduct = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }
    addToCart = (id) => {
        const product = this.getProduct(id);
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        const cart = this.state.cart;
        cart.push(product)
        this.setState(() => {
            return { cart}
        })
        const products = this.state.products;
        products.forEach(item => {
            if(item.id === id){
                item = product;
            }
        })
       
        this.setState(() => {
            return { products }
        })
        this.addTotal()
    }
    clearCart = ()=> {
        this.setState(() => {
            return {cart:[]}
        }, () => {
            this.setProducts();
            this.addTotal();
        })
    }
    increment = (id) => {
        const cart = this.state.cart;
        const product = cart.find(item => item.id === id);
        const index = cart.indexOf(product);
        product.count += 1;
        product.total = product.price * product.count;
        cart[index] = product;
        this.setState(() => {
            return { cart }
        })
        this.addTotal()
    }
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map( item => subTotal += item.total);
        let taxt = (subTotal * 0.1).toFixed(2);
        let total = subTotal + parseFloat(taxt);
        this.setState(() => {
            return{
                cartSubtotal: subTotal,
                cartTotal: total,
                cartTaxt: taxt
            }
        })
        
    }
    decrement = (id) => {
        const cart = this.state.cart;
        const product = cart.find(item => item.id === id);
        const index = cart.indexOf(product);
        if (product.count === 0) {
            return
        }
        product.count -= 1;
        product.total = product.price * product.count;
        cart[index] = product;
        this.setState(() => {
            return { cart }
        })
        this.addTotal()
    }
    removeItem = (id) => {
        const cart = this.state.cart;
        const product = cart.find(item => item.id === id);
        const index = cart.indexOf(product);
        cart.splice(index,1);
        this.setState(() => {
            return { cart }
        })
        const tempProduct = this.getProduct(id);
        tempProduct.inCart = false;
        tempProduct.count = 0;
        tempProduct.total = 0;
        const products = this.state.products;
        products.forEach(item => {
            if (item.id === id) {
                item = tempProduct
            }
        })

        this.setState(() => {
            return { products }
        })
        this.addTotal();
    }
    render() {
        return (
            <ProductContext.Provider value={{...this.state, 
            handleDetail: this.handleDetail, 
            addToCart: this.addToCart,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };