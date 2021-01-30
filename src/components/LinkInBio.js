import React, { Component } from 'react'

export class LinkInBio extends Component {
    render() {
        return (
            <React.Fragment>
                <a href={this.props.link}>
                    <img src={this.props.image} alt={this.props.title} />
                </a>
            </React.Fragment>
        )
    }
}

export default LinkInBio
