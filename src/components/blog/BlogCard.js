import React, { Component } from 'react'

export class BlogCard extends Component {
    render() {
        return (
            <div className="row" >
                <div class="card col s12 m4">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src={elonMusk} />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">
                            Elon Musk 'I don't want to be CEO of anything'
                            <i class="material-icons right">more_vert</i>
                        </span>
                        <p><a href={articleLink}>Read more</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">
                            In the update:
                            <i class="material-icons right">close</i>
                        </span>
                        <ul>
                            <li>Elon Musk: ‘I don’t want to be CEO of anything’</li>
                            <li>Afterpay: Jack Dorsey’s Square in Australia’s biggest buyout</li>
                            <li>Zoom settles US class action privacy lawsuit for $86m</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        )
    }
}

const elonMusk = "https://ichef.bbci.co.uk/news/976/cpsprodpb/5C64/production/_115525632_elonmusk.jpg"
const articleLink = "https://docs.google.com/document/d/e/2PACX-1vR-YwY4BDTTv9RtNlRJTslskmJNr-oh8XIkZCKRLjXeLbiNvrV3N_M176m_l4AwCDq31bHuggf_BBae/pub"

export default BlogCard
