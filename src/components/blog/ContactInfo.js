import React, { Component } from 'react'
import btf from '../../images/btf.jpg'

export class ContactInfo extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m8 center">
                    <h3>Contact</h3>
                    <hr className=" black" style={{width: '40px'}} />
                    <div className="row">
                        <p className="col s6 center">email</p>
                        <p className="col s6 center">adriankokai@gmail.com</p>
                        <p className="col s6 center">call</p>
                        <p className="col s6 center">+263 785 601 558</p>
                    </div>
                </div>
                <img className="col s12 m4" src={btf} />
            </div>
        )
    }
}

export default ContactInfo
