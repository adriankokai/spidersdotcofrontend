import React, { Component } from 'react'
import Modal from './Modal'

export class Small extends Component {
    render() {
        return (
            <div className='navbar-fixed'>
                <nav className="z-depth-0">
                    <div class="nav-wrapper white ">
                        <ul id="nav-mobile" className="row">
                            <li className="col s10"><a href="#" class="black-text">
                                <span style={logoStyles}>spidersdotco</span> 
                            </a></li>
                            <li className="col s2">
                                <Modal />
                                <a 
                                    href="#" 
                                    className="black-text right modal-trigger" 
                                    data-target="navmodal"
                                >
                                    <i className="material-icons">menu</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const logoStyles = {
    fontWeight: 'bold',
    marginLeft: '-11px'
}

export default Small