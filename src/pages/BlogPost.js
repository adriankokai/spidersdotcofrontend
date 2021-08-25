import React, { Component } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux'
import { fetchArticle } from '../store/actions/fetchArticle'
import ContactInfo from '../components/blog/ContactInfo'

export class BlogPost extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.props.onFetchArticle(id)
        if (this.props.article) {
            window.history.pushState(
                '', 
                this.props.article.title, 
                `/${this.props.article.title}/`
            )}
    }
    
    render() {
        return (
            <div>
                <div className="center" >
                    <a href='/' >
                        <i className="material-icons yellow-text">home</i>
                        Go back home
                    </a>
                    { 
                        this.props.article ?

                        <>
                        <h3 className="black" > { this.props.article.title } </h3>
                        <p>published: {this.props.article.date}</p>
                        </>

                        :
                        
                        null
                    } 
                </div>
                {
                    this.props.article !== null && this.props.article !== undefined ?

                    ReactHtmlParser(this.props.article.content)

                    :

                    null
                }
                <ContactInfo />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        article: state.fetchArticle.article
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchArticle: id => dispatch(fetchArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
