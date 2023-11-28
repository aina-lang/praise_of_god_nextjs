
import React from 'react'
import {
    Navbar, NavbarBrand, NavbarContent,
    NavbarItem, NavbarMenuToggle, NavbarMenu,
    NavbarMenuItem,
    Link,
    Button
} from "@nextui-org/react";

function NavBar() {
    return (
        <div className="fixed top-0 left-0 w-full p-10 text-white">
            <Navbar className="w-full  flex justify-between">
                <NavbarBrand>
                    <p className="font-bold text-inherit text-xl">Praise Of god</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

        </div>
    )
}

export default NavBar