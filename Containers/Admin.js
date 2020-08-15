import React  from 'react';
import Books from './Books/Books'
import Transactions from './Transactions/Transactions'
import { Route, NavLink, Switch,Redirect } from 'react-router-dom';
import './Home.css'

const Admin=(props)=>{
return(
    <div className="dashboard">
    <header>
        <nav>
            <ul>
                <li><NavLink
                    to="/books/"
                    exact
                    >Books</NavLink></li>
                <li><NavLink 
                to='/transactions/'
                exact
                >Transactions</NavLink></li>
            </ul>
        </nav>
    </header>
    <Switch>
        <Route path="/books" component={()=><Books isAdmin={true} />} />
        <Route path="/transactions" component={Transactions} />
        <Redirect to="/books" /> 
    </Switch>
</div>
);
}

export default Admin;