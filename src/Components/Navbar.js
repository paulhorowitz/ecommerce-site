import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ButtonContainer} from './Button'

export default class Navbar extends Component {
  state={
    products:[]
  }
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm">
        <Link to='/'>
          <img src={logo} alt="store" 
          className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items center">
          <li className="nav-item ml-5"></li>
        <Link to="/" className="nav-link">
          products
        </Link>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer> 
        </Link>
        </NavWrapper>
      </div>
    )
  }
}


const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
  color: var(--mainWhite)!important;
  font-size: 1.3rem;
  text-transform: capitalize;
}
`