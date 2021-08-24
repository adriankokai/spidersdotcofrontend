import React, { Component } from 'react'
import white from '../../images/white.jpg'
import white1 from '../../images/white1.jpg'

export class Navcard extends Component {
    bg = this.props.portfolio ? white1:white
    render() {
        return (
            <div class="row" style={{margin: '1rem'}} >
                <div class="col s12" style={this.cardStyles} >
                    <div class="card transparent z-depth-0" >
                            <div className="hide-on-med-and-down">
                                <a 
                                    href="#" 
                                    className="btn transparent z-depth-0 black-text " 
                                    style={{fontSize: '1.8rem', fontFamily: 'freight-big-pro'}}
                                >
                                    spidersdotco
                                </a> 
                                <a 
                                    href="/portfolio" 
                                    className="btn black right" 
                                    style={this.props.portfolio ? linkButtonStylesActive : linkButtonStyles}
                                >
                                    portfolio
                                </a>
                                <a 
                                    href="/"
                                    className="btn black right" 
                                    style={this.props.blog ? linkButtonStylesActive : linkButtonStyles}
                                >
                                    blog
                                </a>
                            </div>
                            <h3 className="center " style={{marginTop: '30vh', fontFamily: 'freight-big-pro'}} >
                                {
                                    this.props.portfolio ?

                                    "the web that spiders build"

                                    :

                                    "spiders that do what spiders do"
                                }
                            </h3>
                            <hr className=" black" style={{width: '40px'}} />
                                
                          
                    </div>
                </div>
            </div>
        )
    }

    cardStyles = {
        backgroundImage:`url(${this.bg})`,
        backgroundRepeat: "noRepeat",
        height: '90vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '2.5rem',
        backdropFilter: 'blur(50px)',
    }
}



const linkButtonStyles ={
    marginLeft: '10px',
    fontSize: '0.7rem'
}

const linkButtonStylesActive ={
    marginLeft: '10px',
    fontSize: '0.7rem',
    opacity: '50%'
}

export default Navcard
