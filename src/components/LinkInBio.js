import React, { Component } from 'react'

export class LinkInBio extends Component {
    render() {
        return (
            <React.Fragment>
                <a href={this.props.link} className="col s12 m6 l4">
                    <img style={styles} src={'http://127.0.0.1:8000/main' + this.props.image} alt={this.props.title} />
                </a>
            </React.Fragment>
        )
    }
}

const styles = {
   marginBottom: '2px'
}

export default LinkInBio
