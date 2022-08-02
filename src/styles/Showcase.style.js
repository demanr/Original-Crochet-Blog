import styled from "styled-components";
import { Link } from "react-router-dom"

export const Descriptor = styled.div`
    text-align: center;
    margin: auto;
    width: 70%;
`

export const CardSection = styled.div`
    display: flex;
    flex-direction: column; 
    flex-flow: row wrap;
    justify-content: center;
`

export const GraphSection = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 40px;
`

export const GraphDescription = styled.p`
    height: 350px;
    width: 20%;
    display: flex;
    text-align: center;
    align-items:center;
    justify-content:center;
`