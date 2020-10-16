import React from 'react'
import img from './assets/img3.jpg'

const team = () => {
    return(
        <section class='team'>
            <img src={ img } value='Photo réprésentant des bureaux' />
            <div className="title">
                <h2>Creative Team</h2>
            </div>
            <div className="descri">
                <h2>Good minset</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                </p>
                <button>
                    Meet the team
                </button>
            </div>
        </section>
    )
}

export default team