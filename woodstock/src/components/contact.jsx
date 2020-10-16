import React from 'react'

const contact = () => {
    return(
        <section>
            <h2>Contact Us</h2>
            <form action="">
                <input type="text" name="firstname" id="firstname" placeholder="First name"/>
                <input type="text" name="lastname" id="lastname" placeholder="Last name"/>
                <input type="email" name="email" id="email" placeholder="Your E-mail"/>
                <textarea  name="textfield" id="textfield" row="16" cols="30">Enter your message there........</textarea>
            </form>
        </section>
    )
}


export default contact