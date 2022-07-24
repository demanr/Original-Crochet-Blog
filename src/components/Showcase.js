import React from "react"
import ProjectData from "../projectData.js"
import Card from "./Card.js"
import {
    ShowcaseContainer,
    CardSection,
    Title,
    Welcome,
} from "../styles/Showcase.style.js"

export default function Showcase() {
    const cards = ProjectData.data.completedProjects.map(project => {
        return (
            <Card 
            key={project.id}
            item={project}
            />
    )})

    return (
        <ShowcaseContainer>
            <Title>Welcome!</Title>
            <Welcome>Hello, and welcome to my crochet blog. Here you will find information on my works, 
            information about me, and some projects I plan to do in the future. This blog serves as a 
            connection between my crochet, and my coding. I plan on using this site to track my progress 
            in both of these fields.</Welcome>
            <Title>Showcase</Title>
            <CardSection>
                {cards}
            </CardSection>
        </ShowcaseContainer>
        )
}