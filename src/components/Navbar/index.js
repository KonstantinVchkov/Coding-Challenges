import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
     NavbarContainer,
      NavLogo,
       MobileIcon,
        NavMenu,
         NavItem,
          NavLinks,
        NavBtn,
    NavBtnLink} from './NavBarElements'

const Navbar = ({toggle}) => {
    const [scrolNav, setScrolNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrolNav(true)
        } else {
            setScrolNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
       <>
         <Nav scrolNav={scrolNav}>
             <NavbarContainer>
                 <NavLogo to='/' onClick={toggleHome}>Bankzi</NavLogo>
                 <MobileIcon onClick={toggle}>
                     <FaBars />
                 </MobileIcon>
                 <NavMenu>
                     <NavItem>
                         <NavLinks to="about"
                         smooth={true} duration={400}
                         spy={true} exact='true' 
                         offset={-80}
                         >About</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="discover"
                        smooth={true} duration={400}
                        spy={true} exact='true' 
                        offset={-80}
                         >discover</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to="services"
                        smooth={true} duration={400}
                        spy={true} exact='true' 
                        offset={-80}
                         >Services</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to="signup">Sign up</NavLinks>
                     </NavItem>
                 </NavMenu>
                 <NavBtn>
                     <NavBtnLink to="/signin">Sign in</NavBtnLink>
                 </NavBtn>
             </NavbarContainer>
         </Nav>
       </>
    )
}

export default Navbar;
