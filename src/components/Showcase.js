import React from "react"
import ProjectData from "../projectData.js"
import Card from "./Card.js"
import {
    ShowcaseContainer,
    CardSection,
    Title,
    Descriptor,
    GraphSection,
    GraphDescription,
} from "../styles/Showcase.style.js"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Label
  } from "recharts";

export default function Showcase() {
    const cards = ProjectData.data.completedProjects.map(project => {
        return (
            <Card 
            key={project.id}
            item={project}
            />
    )})
    const completionTimeData = ProjectData.data.completedProjects.map(project => {
        return (
            {name: `${project.name}`, timeSpent: project.hoursSpent}
    )})
    const timeData = [{name: "e", dateCompleted: "march", timeSpent: 4}
    ,{name: "e", dateCompleted: "march", timeSpent: 4}
    ,{name: "e", dateCompleted: "march", timeSpent: 4}]

    return (
        <ShowcaseContainer>
            <Title>Welcome!</Title>
            <Descriptor>Hello, and welcome to my crochet blog. Here you will find information on my works, 
            information about me, and some projects I plan to do in the future. This blog serves as a 
            connection between my crochet, and my coding. I plan on using this site to track my progress 
            in both of these fields.</Descriptor>
            <Title>Showcase</Title>
            <Descriptor>Click cards to see other angles!</Descriptor>
            <CardSection>
                {cards}
            </CardSection>
            <Title>Time Spent On Projects</Title>
            <GraphSection>
                <ResponsiveContainer width="70%" height={400} display="flex">
                    <BarChart data={completionTimeData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="timeSpent" fill="rgba(106, 110, 229)" />
                    </BarChart>
                </ResponsiveContainer>
                <GraphDescription>
                    This graph details how many hours I spent on each of my projects, 
                    in no specific chronological order.
                </GraphDescription>
            </GraphSection>
        </ShowcaseContainer>
        )
}