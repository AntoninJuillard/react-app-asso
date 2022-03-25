import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import logo from '../../img/logo.png'

export type NavProps = {
  handleAccountPageOpened: Function
  handleLogin: Function
  handleHomepage: Function
}



export default class Nav extends React.Component<NavProps, {}>{
  
  render() {
      return (
        <div className='navbar'>    
            <Link to="/" onClick={() => this.props.handleAccountPageOpened()} className='accountButton'>Mon Compte</Link>
            <Link to="/" onClick={() => this.props.handleLogin()} className='connexionButton'>se connecter</Link>
            <Link to="/" onClick={() => {this.props.handleHomepage()}} className='homepageButton'>Accueil</Link>          
            <img src={logo} alt='1don1po logo marque site' onClick={() => {this.props.handleHomepage()}}></img>
        </div>
      )
  }
}
