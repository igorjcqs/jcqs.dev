import React from "react";
import LogoSrc from "../../assets/Logo.png"
import { Container, MenuButton, LeftSideBar, RightSideBar, CenterCircle, Logo } from "./styles";

const Navbar: React.FC = () => {
    return (
        <Container>
            <LeftSideBar>
               <MenuButton><a href="https://google.com/">ABOUTME</a></MenuButton>
            </LeftSideBar>
            <CenterCircle>
               <Logo src={LogoSrc} />
            </CenterCircle>
            <RightSideBar>
               <MenuButton><a href="https://google.com/">CONTACT</a></MenuButton>
            </RightSideBar>
        </Container>
    );
};

export default Navbar;