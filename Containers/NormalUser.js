import React  from 'react';
import Books from './Books/Books'
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import './Home.css'

const NormalUser=(props)=>{
return(
    <div className="dashboard">
    <header>
        <nav>
            <ul>
                <li><NavLink
                    to="/books/"
                    exact
                    >Books</NavLink></li>
                <li><NavLink to='/return/'
                >Return</NavLink></li>
            </ul>
        </nav>
    </header>
    <Switch>
        <Route path="/books" component={Books} />
        <Route path="/return" component={()=><Books return='true'/>} />
        <Redirect to="/books" /> 
    </Switch>
</div>
);
}

export default NormalUser;