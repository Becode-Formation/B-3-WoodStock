import React from 'react'
import logo from './assets/logo.png'
import menuIcon from './assets/menu.svg'

const menu = ()  => {
    return(
        <section class="menu">
        <ul class ='menu__link'>
            <li>
                <img src={menuIcon} value="Logo WOOD"/>
            </li>
                <img src={logo} value="logo Wood" />
            <li class="menu__page">

                <li><a href="#">About</a></li>
                <li><a href="#">Furnituresw</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Contact</a></li>
            </li>
        </ul>
        </section>
        )
}

export default menu