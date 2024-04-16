import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
export const Layout = () => {
    return (
        <>
            <Header />
            {/* header and footer alway same but inside that components may be change */}
            <Outlet />
            {/* outlet will use this function as base layout  */}
            <Footer />
        </>
    )
}
