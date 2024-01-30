import React from 'react'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from './components/Index'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout