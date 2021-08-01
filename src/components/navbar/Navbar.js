import React, { Component } from 'react'
import Large from './Large';
import Medium from './Medium';
import Small from './Small';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="hide-on-med-and-down">
                    <Large />
                </div>
                <div className="hide-on-small-only hide-on-large-only row green darken-4">
                    <Medium />
                </div>
                <div className="hide-on-med-and-up ">
                    <Small />
                </div>
            </div>
        )
    }
}

export default Navbar
