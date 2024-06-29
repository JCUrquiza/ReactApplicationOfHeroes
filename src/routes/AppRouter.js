import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Routes>
                    <Route exact path='/login' Component={LoginScreen} />
                    <Route exact path='/' Component={MarvelScreen} />
                </Routes>
            </div>
        </Router>
    )
}

