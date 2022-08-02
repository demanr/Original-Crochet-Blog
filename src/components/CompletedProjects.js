import React from "react"
import ProjectData from "../projectData.js"
import Project from "./ProjectTemplate"
import {
    Title,
    FullContainer,
} from "../styles/Basic.style.js"

export default function CompletedProjects() {
    const projects = ProjectData.data.completedProjects.map(project => {
        return (
            <Project 
            key={project.id}
            item={project}
            />
    )})

    return (
        <FullContainer>
            <Title>Completed Projects</Title>
            {projects}
        </FullContainer>
        )
}