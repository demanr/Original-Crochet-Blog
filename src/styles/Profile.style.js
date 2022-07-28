import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    
`
export const FullContainer = styled.div`
    margin-top: 35px;
`

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`
export const PictureContainer = styled.div`
    width: 30%;
    @media (max-width: 1350px) {
        width: 70%;
        display: block;
    }
`

export const ProfilePicture = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`

export const AboutContainer = styled.div`
    width: 40%;
    text-align: center;
    padding-left: 10%;
    margin-top: -40px;
    @media (max-width: 1350px) {
        width: 70%;
        padding-left: 0;
        margin-top: 10px;
    }
`

export const StatsContainer = styled.div`
    margin-top: 35px;
`

export const Text = styled.span `
    font-family: 'Inter', 'Red Hat Display', sans-serif;  
    font-size: 18px;
`