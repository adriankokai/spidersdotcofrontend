import React, { Component } from 'react'
import BlogCard from '../components/blog/BlogCard'
import ContactInfo from '../components/blog/ContactInfo'
import Navbar from '../components/navbar/Navbar'

export class Blog extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ContactInfo />
                <BlogCard />
            </div>
        )
    }
}

export default Blog
