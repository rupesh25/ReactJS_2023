import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import Profile from './Profile';
import Home from './Home';

const Routing = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/post" component={Post} />
                <Route path="/profile" component={Profile} />
            </div>
            

            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;