import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/logo.png'
import styles from "../styles/NavBar.module.css"
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContetext';


const NavBar = () => {
    const currentUser = useCurrentUser();
    const loggedOutIcons = 
    <>
        <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active}>
            <i className="fas fa-sign-in-alt">
            </i>
            Sign In
        </NavLink>
        <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active}>
            <i className="fas fa-user-plus">
            </i> Sign Up</NavLink>
    </>
    const loggedInIcons = <>{currentUser?.username}</>
    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container>
                <NavLink to="/">
                    <Navbar.Brand ><img src={logo} alt="Logo" height="45px" /></Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                        <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.Active}>
                        <i className="fas fa-home"></i> 
                        Home 
                        </NavLink>
                        {currentUser ?  loggedInIcons : loggedOutIcons }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar