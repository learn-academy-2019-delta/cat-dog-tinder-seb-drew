import React, { Component } from 'react'

export default class Header extends Component {
    render(){
        return(
            <header>
                <br />
                <h1>Nintendo Tinder</h1>
                <h4> Meet your Game Boy/Girl</h4>
                <br />
            </header>
        )
    }
    // leftComponent={{icon: 'menu', color: '#fff' }}
    // centerComponent={{ text: 'Nintendo Tinder', style: { color: '#fff'} }}
    // rightComponent={{ icon: 'home', color: '#fff' }}
}
