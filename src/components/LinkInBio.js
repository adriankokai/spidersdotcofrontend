import React, { Component } from 'react';
import { BACKEND_URL } from '../store/utility';

export class LinkInBio extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col s12 m6 l4">
                    <a href={this.props.link}>
                        <img style={styles} src={BACKEND_URL + 'main' + this.props.image} alt={this.props.title} />
                    </a>
                </div>
            </React.Fragment>
        )
    }
}

const styles = {
   marginBottom: '2px',
   width: '100%'
}

export default LinkInBio
