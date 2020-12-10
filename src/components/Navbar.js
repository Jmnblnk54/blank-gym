import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
    <div>
        <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Blank Gym</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <NavLink href="">About</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="">Schedule Consultation</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="">Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </div>
    );
}

export default Header;