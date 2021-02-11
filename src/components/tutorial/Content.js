import React, { Component } from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export class Content extends Component {
    render() {
        return (
            <div className="offset300px">
                {
                    ReactHtmlParser(this.props.content)
                }
            </div>
        )
    }
}

export default Content
