import React from "react"
import ProjectData from "../projectData.js"
import {
    CardContainer,
    CardImage,
    CardTitle,
    CardDescription,
} from "../styles/Card.style.js"


export default function Card(props) {
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
        <CardContainer>
            <CardImage src={`/images/${props.item.imageUrl}${currentImage}.jpg`} onClick={changeImage}/>
            <CardTitle>{props.item.name}</CardTitle>
            <CardDescription>{props.item.description}</CardDescription>
        </CardContainer>
        )
}