import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
    Navbar, NavbarBrand, NavbarContent,
    NavbarItem, NavbarMenuToggle, NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";

import HamburgerBtn from './HumbergerBtn';
function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="fixed top-0 left-0 w-full p-10 text-white">
            <Navbar className="w-full  flex justify-between">
                <NavbarBrand>
                    <p className="font-bold text-inherit text-xl">Praise Of god</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            A propos
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Oeuvre
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Gallerie
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end" className='flex'>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#" className="">Contacter nous</Link>
                    </NavbarItem>
                    <HamburgerBtn isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
                </NavbarContent>
                {/* <NavbarMenuToggle> */}

                {/* </NavbarMenuToggle> */}

            </Navbar>

            {menuOpen && <div className="w-screen flex  fixed  bg-gray-200 flex-col h-[40%] left-0 top-0">
                <Link color="foreground" className='p-5 ' href="#">
                    A propos
                </Link>
                <Link href="#" className='p-5 ' aria-current="page">
                    Oeuvre
                </Link>
                <Link color="foreground" className='p-5 ' href="#">
                    Gallerie
                </Link>
                <Link href="#" className='p-5 '>Contacter nous</Link>
            </div>}
        </div>
    );
}

export default NavBar;
