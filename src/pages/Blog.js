import React, { Component } from 'react'
import ArticleCard from '../components/blog/ArticleCard'
import ContactInfo from '../components/blog/ContactInfo'
import Navcard from '../components/navcard/Navcard'
import Navbar from '../components/navbar/Navbar'
import { connect } from 'react-redux'
import { fetchArticles} from '../store/actions/fetchArticles'
import NewsLetterForm from '../components/blog/NewsLetterForm'

export class Blog extends Component {
    componentDidMount = () => {
        this.props.fetchArticles()
    }

    render() {
        return (
            <div>
                <Navbar large={0} />
                <Navcard blog={1} />
                <NewsLetterForm />
                <ContactInfo />
                {
                    Array.isArray(this.props.articles) ?

                    this.props.articles.map(article => (
                        <ArticleCard article={article} key={article.id} />
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
        articles: state.fetchArticles.articles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
