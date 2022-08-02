import React, {useState} from "react"

import { 
    NavbarContainer, 
    LeftContainer, 
    RightContainer, 
    InnerContainer, 
    ExtendedContainer, 
    LinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    } from "../styles/Navbar.style"



export default function Navbar() {
    const [extendedNavbar, setExtendedNavbar] = useState(false)
    const [yarnColour, setYarnColour] = useState("Blue")
    function switchYarnColour() {
        setYarnColour(oldColour => {
            if (oldColour == "Pink"){
                return "Blue"
            }
            else if (oldColour == "Blue") {
                return "Purple"
            }
            return "Pink"

        })
    }

    function switchNavbar() {
        setExtendedNavbar(prev => !prev)
    }
    return (
            <NavbarContainer extendNavbar={extendedNavbar}>
                <InnerContainer>
                    <LeftContainer>
                    <Logo src={`../images/yarnBall${yarnColour}.png`} onClick={switchYarnColour}></Logo>
                    </LeftContainer>
                    <RightContainer>
                        <LinkContainer>
                            <NavbarLink to="/">Home</NavbarLink>
                            <NavbarLink to="/Profile">Profile</NavbarLink>
                            <NavbarLink to="/CompletedProjects">Projects</NavbarLink>
                            <NavbarLink to="/Miscellaneous">Miscellaneous</NavbarLink>
                            
                            <OpenLinksButton onClick={switchNavbar}>{extendedNavbar ? "︽" : "︾"}</OpenLinksButton>
                        </LinkContainer>
                    </RightContainer>
                </InnerContainer>
                { extendedNavbar && (
                <ExtendedContainer>
                    <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/Profile">Profile</NavbarLinkExtended>
                    <NavbarLinkExtended to="/CompletedProjects">Projects</NavbarLinkExtended>
                    <NavbarLinkExtended to="/Miscellaneous">Miscellaneous</NavbarLinkExtended>
                </ExtendedContainer>
                )}
            </NavbarContainer>

        )
}