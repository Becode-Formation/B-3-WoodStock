import React from 'react'
import img from './assets/img1.jpg'

const about = () => {
    return(
        <section class='about'>
            <img src={ img } value='Chaise blanche photo' />
            <div className="aboutUs">
                <h2>About Us</h2>
                <p>
                    Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?
                </p>
                <button>
                    Learn More
                </button>
            </div>
        </section>
    )
}


export default about