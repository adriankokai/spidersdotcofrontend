import React, { Component } from 'react'
import btf from '../../images/btf.jpg'
import { SocialIcon } from 'react-social-icons';

export class ContactInfo extends Component {
    render() {
        return (
            <div className="row" style={{paddingLeft: '10px'}} > 
                <div className="col s12 m8 center">
                    <h3 >contact</h3>
                    <hr className=" black" style={{width: '40px'}} />
                    <br />
                    <div className="row">
                        <SocialIcon bgColor="black" url="mailto:spidersdotco@gmail.com"  />
                        <span> </span>
                        <SocialIcon bgColor="black" url="https://twitter.com/DotcoSpiders"  />
                        <span> </span>
                        <SocialIcon  bgColor="black" url="https://www.youtube.com/channel/UCcYuTPWv2_UeWOTfpg04_-w"  />
                    </div>
                </div>
                <img className="col s12 m4" src={btf} />
            </div>
        )
    }
}

export default ContactInfo
