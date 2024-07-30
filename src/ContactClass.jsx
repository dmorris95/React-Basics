//Class component
//Display contact information such as LinkedIn
import React, { Component } from "react";
import styling from './Contact.module.css'

class ClassContact extends Component {
    render() {
        const contact_head = <h3 id={styling.contact}>Contact Me</h3>
        const links = (<ul>
                        <li>cardinalfanfrommi@gmail.com</li>
                        <li><a href="https://www.linkedin.com/in/daniel-w-morris/">LinkedIn</a></li>
                    </ul>)
        return (
            <div>
                {contact_head}
                {links}
            </div>
        )
    }
}

export default ClassContact