import React from 'react'
import Menu from './menu'
import logo from './assets/WOOD STOCK.png'


const jumbo = () => {
   
    return(
        // Importer le menu
        <header>
            <Menu />
            <div class='jumbotron'>
                <img src={ logo } vlaue='Logo Jumbotron WOOD' />
            </div>
        </header>
    )
}

export default jumbo