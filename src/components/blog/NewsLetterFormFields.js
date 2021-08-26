import React, { Component } from 'react'

export class NewsLetterFormFields extends Component {

    handleChange = e => {
        this.props.handleChange(e)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="center row ">
                <h3 className="col s12" >Subscribe To Our News Letter:</h3>
                <div className="row col s10 m4 offset-m4 offset-s1 " >
                    <input 
                        className="col s12 m5 left"
                        name='name'
                        value={this.props.name}
                        placeholder='name'
                        onChange={this.handleChange}
                        required={true}
                    />
                    <input 
                        className="col s12 m6 right"
                        type="email"
                        name='email'
                        value={this.props.email}
                        placeholder='email'
                        onChange={this.handleChange}
                        required={true}
                    />
                </div>
                <div className="col s12">
                    <input 
                        className=" btn waves-effect teal"
                        type="submit" 
                        value={this.props.loading ? "submitting":"submit"} 
                    />
                </div>
            </form>
        )
    }
}

export default NewsLetterFormFields
