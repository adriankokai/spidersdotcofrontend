import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux'
import { fetchArticle } from '../store/actions/fetchArticle'
import ContactInfo from '../components/blog/ContactInfo'
import './blogpost.css' 

export class BlogPost extends Component {

    componentDidMount = () => {
        const articleTitle = this.props.match.params.title.replace(/-/g, ' ')
        this.props.onFetchArticle(articleTitle)
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
                        <h3> 
                            <span className="black white-text" >{ this.props.article.title } </span>
                        </h3>
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
        onFetchArticle: title => dispatch(fetchArticle(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost)
