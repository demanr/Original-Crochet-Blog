import React from "react"
import ProjectData from "../projectData.js"
import Project from "./ProjectTemplate"
import {
    Container,
} from "../styles/CompletedProjects.style"


export default function CompletedProjects() {
    const projects = ProjectData.data.completedProjects.map(project => {
        return (
            <Project 
            key={project.id}
            item={project}
            />
    )})

    return (
        <Container>
            {projects}
        </Container>
        )
}