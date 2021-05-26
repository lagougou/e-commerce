import React, { Component } from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                    <div className="container-fluid">
                    {/*  */}
                    <Link to='/'>
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link ms-2">
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                            <ButtonContainer><span className="me-2"><i className="fas fa-cart-plus"></i></span>my cart</ButtonContainer>
                    </Link>
                    </div>
                </NavWrapper>
                   
            </div>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform:capitalize;
    }
`