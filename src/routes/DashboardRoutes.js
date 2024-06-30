import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DsScreen } from '../components/dc/DsScreen';

export const DashboardRoutes = () => {
    return (
        <>

            <Navbar />

            <div>
                <Routes>
                    <Route path='/marvel' element={<MarvelScreen />} />
                    <Route path='/heroe/:heroeId' element={<HeroScreen />} />
                    <Route path='/dc' element={<DsScreen />} />

                    <Route path="*" element={<Navigate to="/marvel" />} />

                </Routes>
            </div>
      
        </>
    )
}

