import React from "react"
import ProjectData from "../projectData.js"
import {
    AboutContainer,
    ProfilePicture,
    Text,
    PictureContainer,
} from "../styles/Profile.style.js"
import {
    FullContainer,
    Container,
} from "../styles/Basic.style.js"

export default function Profile() {
    return (
        <FullContainer> 
            <Container>
                <PictureContainer>
                    <ProfilePicture src={"../images/profilePhoto.jpg"}/>
                </PictureContainer>
                <AboutContainer>
                    <Text><h2>Hello!</h2>
                    My name is Rachelle DeMan, and im a second year university student, pursuing a degree in Computer Science.
                    I had dabbled in crocheting a few times in the past. My first interaction was when I was around 14 years old, I wanted 
                    to make a scarf out of chunky blanket yarn. Despite missing stitches, and creating uneven edges, I finished the project. 
                    I thought to myself "if i struggled so much with this, how could I ever do anything more complicated?" and promptly forgot 
                    about crocheting for the next few years. It wasn't until I enrolled in university and heard of the crochet club that my 
                    interest was piqued again. From there I made several scarves, and a basic HTML blog to track my progress. I made a goal to 
                    myself, to make a bee plush before the end of the year. While that goal was never met, I do not take it as a loss. Instead, my 
                    goals changed. I suceeded in equally if not more fulfilling ways.
                    </Text>
                    <h2> </h2>
                    <Text>This site will be used to challenge both my coding and crochet skills. It will be regularily updated, 
                    with new finished projects, and to document goals I want for the future. I will also be trying to make use of 
                    different libraries and programming strategies to improve the website and my knowledge.</Text>
                </AboutContainer>
            </Container>
        </FullContainer>
        )
} 