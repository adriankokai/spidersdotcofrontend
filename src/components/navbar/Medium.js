import React, { Component } from 'react'

export class Medium extends Component {
    render() {
        return (
            <div>
               <nav className="z-depth-0">
                    <div class="nav-wrapper white ">
                        <ul id="nav-mobile" class="right">
                            <li><a href="#" style={logoStyles} class="black-text">spidersdotco</a></li>
                            <li><a href="/" className="black-text">blog</a></li>
                            <li><a href="/portfolio" className="black-text">portfolio</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const logoStyles = {
    fontWeight: 'bold',
    paddingRight: '20px',
}

export default Medium
