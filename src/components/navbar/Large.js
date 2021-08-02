import React, { Component } from 'react'

export class Large extends Component {
    render() {
        return (
            <div className='navbar-fixed'>
                <nav className="z-depth-0">
                    <div class="nav-wrapper white ">
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
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

export default Large
