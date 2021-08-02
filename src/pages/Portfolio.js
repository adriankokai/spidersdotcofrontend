import React, { Component } from 'react'
import Navbar from '../components/navbar/Navbar'
import tac from '../images/tac.png'

export class Portfolio extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h3 className="center amber-text text-accent-3">Recent Work</h3>
                <hr />
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
