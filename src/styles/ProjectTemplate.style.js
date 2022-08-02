import styled from "styled-components";
import { Link } from "react-router-dom"

export const ImageContainer = styled.div`
    width: 30%;
    @media (max-width: 1350px) {
        width: 70%;
        display: block;
    }
`

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
`

export const InfoContainer = styled.div`
    width: 40%;
    padding-left: 10%;
    margin-top: -40px;
    @media (max-width: 1350px) {
        width: 70%;
        padding-left: 0;
        margin-top: 10px;
    }
    
`

export const Subtitle = styled.h1`
    width: 100%;
    font-size: 24px;
    text-align: left;
`
