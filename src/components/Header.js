import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div style={{zIndex: '999'}} className="navbar-fixed white darken-3">
                <nav>
                    <div className="nav-wrapper white">
                        <a className="brand-logo center yellow-text text-darken-2">spidersdotco</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
