import styled from "styled-components";
import {FC} from "react";
import {Button} from "../button/Button.tsx";

type ProjectCardPropsType = {
    name: string,
    description: string,
    image: string,
    link: string,
}

export const ProjectCard:FC<ProjectCardPropsType> = (props) => {
    return (
        <ProjectCardContainer>
            <ProjectCardImage src={props.image} alt={"project"}/>
            <ProjectCardTitle>{props.name}</ProjectCardTitle>
            <ProjectCardDescription>{props.description}</ProjectCardDescription>
            <Button as="a" href={props.link} target={"_blank"} align="flex-start">Look it up</Button>
        </ProjectCardContainer>
    );
};

const ProjectCardContainer = styled.div`
    max-width: 550px;
    display: flex;
    flex-direction: column;
    padding: 25px 25px 40px 25px;
    align-items: center;
    border: 1px solid #a39d9d;
    border-radius: 50px 0;
`
const ProjectCardImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    object-position: top center;
    max-width: 500px;
    border-radius: 24px 8px 8px 8px;
    margin-bottom: 40px;
`
const ProjectCardTitle = styled.p`
    font-weight: 600;
    position: relative;
    font-size: 30px;
    line-height: 89%;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding-bottom:27px;
    margin: 0 0 40px 0;

    &:before {
        content: '';
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translateX(-50%);
        height: 4px;
        width: 300px;
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    }`
const ProjectCardDescription = styled.p`
    width: 100%;
    align-self: flex-start;
    text-align: left;
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    margin: 0 0 50px 0;`

