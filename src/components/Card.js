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
    console.log(`../images/${props.item.imageUrl}${currentImage}.jpg`)
    return (
        <CardContainer>
            <CardImage src={`/images/${props.item.imageUrl}${currentImage}.jpg`} className="Card--img"/>
            <CardTitle>{props.item.name}</CardTitle>
            <CardDescription>{props.item.description}</CardDescription>
        </CardContainer>
        )
}