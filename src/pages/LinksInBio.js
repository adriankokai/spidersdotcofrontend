import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinkInBio from '../components/LinkInBio';
import { fetchLinksInBio } from '../store/actions/fetchLinksInBio';

export class LinksInBio extends Component {
    componentDidMount() {
        this.props.onFetchLinksInBio()
    }

    render() {
        return (
            <div className='row'>
                {
                    Array.isArray(this.props.linksInBio) ?

                    this.props.linksInBio.map(linkInBio => (
                        <LinkInBio
                            link={linkInBio.link}
                            image={linkInBio.image}
                            title={linkInBio.title}
                        />
                    ))

                    : 

                    null
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        linksInBio: state.fetchLinksInBio.linksInBio
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchLinksInBio: () => dispatch(fetchLinksInBio())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksInBio)
