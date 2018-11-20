import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
        })
    }

    render () {

    const userLink = (
        <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome Back {this.state.first_name} {this.state.last_name}</h1>
        </div>
     )

        return (
            <div className="container">
                <div className="jumbotron mt-5">
                {userLink}
                </div>
            </div>
        )
    }
}

export default withRouter(Landing);