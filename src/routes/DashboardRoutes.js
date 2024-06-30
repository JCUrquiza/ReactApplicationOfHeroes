import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';


export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div className='container mt-2'>
                <Routes>
                    <Route exact path='/marvel' element={<MarvelScreen />} />
                    <Route exact path='/hero/:heroeId' element={<HeroScreen />} />
                    <Route exact path='/dc' element={<DcScreen />} />

                    <Route path="*" element={<Navigate to="/marvel" />} />

                </Routes>
            </div>
      
        </>
    )
}

