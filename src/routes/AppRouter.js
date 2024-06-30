import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/login" Component={LoginScreen} />

                    <Route path="*" Component={DashboardRoutes} />
                </Routes>
            </div>
        </Router>
    )
}

