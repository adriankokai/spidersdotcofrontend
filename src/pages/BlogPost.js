// import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'

import { fetchArticle } from '../store/actions/fetchArticle'
import ContactInfo from '../components/blog/ContactInfo'
import './blogpost.css' 

// this page displays a full blog post based on the title in the url

// switching to function components
const BlogPost = () => {
    const { title } = useParams();
    console.log("title param:", title);
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log("blogpost page mounted");
        const articleTitle = title.replace(/-/g, ' ')
        dispatch(fetchArticle(articleTitle))
    }, [title, dispatch]);
    
    const article = useSelector(state => state.fetchArticle.article);
    
    return (
        <div>
            <div className="center" >
                <a href='/' >
                    <i className="material-icons yellow-text">home</i>
                    Go back home
                </a>
                { 
                    article ?

                    <>
                    <h3> 
                        <span className="black white-text" >{ article.title } </span>
                    </h3>
                    <p>published: {article.date}</p>
                    </>

                    :
                    
                    null
                } 
            </div>
            {
                article ?

                parse(article.content)

                :

                null
            }
            <ContactInfo />
        </div>
    );
};

export default BlogPost;

// previous version with

// class component
{/*
export class BlogPost extends Component {

    componentDidUpdate = () => {
        console.log("blogpost page mounted");
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

                    parse(this.props.article.content)

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
*/ }