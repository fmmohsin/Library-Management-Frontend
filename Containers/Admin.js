import React  from 'react';
import Books from './Books/Books'
import Transactions from './Transactions/Transactions'
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import './Home.css'

const Admin=(props)=>{
return(
    <div className="Admin">
    <header>
        <nav>
            <ul>
                <li><NavLink
                    to="/Books/"
                    exact
                    >Books</NavLink></li>
                <li><NavLink to='/Transactions/'
                >Transactions</NavLink></li>
            </ul>
        </nav>
    </header>
    <Switch>
        <Route path="/Books" component={()=><Books isAdmin={true} />} />
        <Route path="/Transactions" component={Transactions} />
        <Redirect to="/Books" /> 
    </Switch>
</div>
);
}

export default Admin;