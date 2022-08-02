import React from "react"
import ProjectData from "../projectData.js"
import {
    ImageContainer,
    InfoContainer,
    Image,
    Subtitle,
} from "../styles/ProjectTemplate.style.js"
import {
    Title,
    Container,
} from "../styles/Basic.style.js"

export default function Project(props) {
    const [currentImage, setCurrentImage] = React.useState(1)
    
    function changeImage() {
        setCurrentImage(prev => {
            var newIndex = 1
            if (prev != props.item.totalImages){
                newIndex = prev + 1
            }
            return newIndex
        })

    }
    return (
        <Container >
            <Title>{props.item.name}</Title>
            <ImageContainer >
                <Image src={`/images/${props.item.imageUrl}${currentImage}.jpg`} onClick={changeImage}/>
            </ImageContainer>
            
            <InfoContainer>
            <Subtitle>Description</Subtitle>
                {props.item.fullDescription}
            <Subtitle>Pattern</Subtitle>
            {props.item.patternDescription}
            <Subtitle>Completion Dates</Subtitle>
            This {(props.item.name).toLowerCase()} was started on {props.item.dateStarted} and completed on {props.item.dateEnded}. 
            This took a total of {props.item.hoursSpent} hours to complete.
            </InfoContainer>
        </Container>
        )
}