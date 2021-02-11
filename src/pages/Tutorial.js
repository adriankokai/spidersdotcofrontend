import React, { Component } from 'react'
import Sidenav from '../components/tutorial/Sidenav'
import Content from '../components/tutorial/Content'
import Header from '../components/Header'
import { connect } from 'react-redux'
import { fetchTutorial } from '../store/actions/fetchTutorial'

export class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: null

        }

        this.changeContent = this.changeContent.bind(this)
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.onFetchTutorial(id)
    }

    changeContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Sidenav 
                    tutorialPages=
                    {
                        this.props.tutorial !== null ?
                        
                        this.props.tutorial.tutorial_pages

                        :

                        null
                    } 
                    changeContent={this.changeContent}
                    heading=
                    {
                        this.props.tutorial !== null ?
                        
                        this.props.tutorial.title

                        :

                        null
                    }
                />
                <Content content=
                    {
                        this.state.content !== null ?
                        
                        this.state.content

                        :
                        
                        this.props.tutorial !== null ? 
                        
                        this.props.tutorial.tutorial_pages[0].content 
                        
                        : 
                        
                        null
                    } 
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    tutorial: state.fetchTutorial.tutorial
})

const mapDispatchToProps = dispatch => ({
    onFetchTutorial: id => dispatch(fetchTutorial(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tutorial)