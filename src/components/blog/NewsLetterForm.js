import React, { Component } from 'react'
import { connect } from 'react-redux';
import { subscribe } from '../../store/actions/submitApplication';
import NewsLetterFormFields from './NewsLetterFormFields';

export class NewsLetterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        this.setState(state => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.email !== '') {
            this.props.onSubscribe(this.state.name, this.state.email)
            this.setState({
                name: '',
                email: ''
            })
        }
    }

    render() {
        return (
            <>
            {

                this.props.message === 'subscribed' ?

                <h4 className="center" >Thank you :)</h4>

                :

                <NewsLetterFormFields 
                    name={this.state.name}
                    email={this.state.email}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    loading={this.props.loading}
                />
            }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.submitApplication.loading,
        message: state.submitApplication.message
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubscribe: (name, email) => dispatch(subscribe(name, email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetterForm)
