import styled from "styled-components";
import { Link } from "react-router-dom"

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "30vh" : "80px" )};
    background-color: black;
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
        height: 80px;
    }
`

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-start;
    padding-left: 50px;
`

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
    padding-top: 13px;
`

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`

export const InnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

export const LinkContainer = styled.div`
    display: flex;
    
`

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 800px) {
        display: none;
    }
    &:hover {
        color: grey;
    }
`

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    text-decoration: none;
    margin: 10px;
    text-align: center;
    &:hover {
        color: grey;
    }
`

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 800px) {
        display: none;
    }
    &:hover {
        color: grey;
    }
`

export const ExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 800px) {
        display: none;
    }
    
`