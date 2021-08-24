import React, { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import Navcard from '../components/navcard/Navcard'
import tac from '../images/tac.png'

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar large={0} />
                <Navcard portfolio={1} />
                <div className="center">
                    <a className="center btn black">Recent Work</a>
                </div>
                <hr style={{margin: "15px"}} />
                <br /><br />
                <a href="https://thaantisocialcircle.web.app" target="_blank" >
                    <div className="row ">
                        <div class="card col s10 m8 offset-s1 offset-m2 z-depth-4">
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src={tac} />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default Portfolio
