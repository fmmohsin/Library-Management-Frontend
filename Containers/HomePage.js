import React, { Component, Fragment } from 'react'
import Authentication from './Authentication/Authentication'
import axios from 'axios'
import Admin from '../Containers/Admin'
import NormalUser from './NormalUser'
import AuthDetails from '../Context/AuthDetails'


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: false,
            isLoggedIn: false
        }
    }
    onLogin = (user) => {
        axios.post('http://localhost:1234/login', user).then((res) => {
            console.log(res);
            const loginres = res.data;
            if (loginres.isLoggedIn) {
                this.setState(loginres);
            } else if (loginres.isLoggedIn === false) {
                alert("Incorrect Password");
            }
            if (loginres.isUser !== null && loginres.isUser !== undefined && !loginres.isUser)
                alert("You do not have account please signUp");
        })

    }
    render() {
        let auth = (!this.state.isLoggedIn) ? < Authentication onLogin={this.onLogin} /> : null;
        let adminUser = (this.state.isLoggedIn && this.state.isAdmin) ? (< AuthDetails.Provider value={this.state} >< Admin /></AuthDetails.Provider>) : null;
        let normalUser = (this.state.isLoggedIn && !this.state.isAdmin) ? (<AuthDetails.Provider value={this.state} > < NormalUser /> </AuthDetails.Provider>) : null
        return (<Fragment > 
            {auth} 
            {adminUser} 
            {normalUser} 
            </Fragment>)
    }
}

export default Homepage;