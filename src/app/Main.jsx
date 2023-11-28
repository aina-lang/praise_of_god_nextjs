import Banner from '@/components/Banner'
import NavBar from '@/components/NavBar'
import About from '@/pages/About'
import Service from '@/pages/Service'
import React from 'react'

function Main() {
    return (
        <div>
            <NavBar />
            <Banner />
            <Service/>
            <About />
        </div>
    )
}

export default Main