import styled from "styled-components";
import { Link } from "react-router-dom"

export const CardContainer = styled.div`
    font-family: 'Inter', 'Red Hat Display', sans-serif;
    width: 300px;
    margin: 20px;
    font-size: 12px;
    flex: 0 0 auto;
    display: flex;     
    flex-direction: column; 
    position: relative;
`

export const CardImage = styled.img`
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    height: auto;
    border: 2px solid white;
    &:hover {
        border: 2px solid black;
        
    }
`

export const CardTitle = styled.span`
    font-size: 24px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const CardDescription = styled.span`
    font-size: 16px;
    align-items: center;
`