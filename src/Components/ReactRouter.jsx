//React Router: react router helps in managing navigation and routing in your single page application.

import {BrowserRouter as Router, route, link} from 'react-router-dom';

function APP(){
    return (
        <Router>
            <div>
                <nav>
                    <link to="/">Home</link>
                    <link to="/about">About</link>
                </nav>
                <route path="/" exact component={Home}/>
                <route path="/about" component={About}/>
            </div>
        </Router>
    )
}