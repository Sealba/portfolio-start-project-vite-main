import styled from "styled-components";
import {FC} from "react";
import {Btn} from "../button/Button.tsx";
import {theme} from "../../styles/Theme.ts";

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
            <Btn as="a" href={props.link} target={"_blank"} $align="flex-start" >Look it up</Btn>
        </ProjectCardContainer>
    );
};

const ProjectCardContainer = styled.div`
    max-width: 550rem;
    display: flex;
    flex-direction: column;
    padding: 25rem 25rem 40rem 25rem;
    align-items: center;
    border: 1rem solid #a39d9d;
    border-radius: 50rem 0;
    
    @media ${theme.media.mobile}{
        padding: 25rem 25rem 25rem 25rem;  
        ${Btn} {
            width: 100%;
        }
    }
`
const ProjectCardImage = styled.img`
    width: 100%;
    height: 280rem;
    object-fit: cover;
    object-position: top center;
    max-width: 500rem;
    border-radius: 24rem 8rem 8rem 8rem;
    margin-bottom: 40rem;
    @media ${theme.media.mobile}{
        height: 220rem;
    }
`
const ProjectCardTitle = styled.p`
    font-weight: 600;
    position: relative;
    font-size: 30rem;
    line-height: 89%;
    color: ${theme.colors.font};
    text-transform: uppercase;
    text-align: center;
    padding-bottom:27rem;
    margin: 0 0 40rem 0;
    @media ${theme.media.mobile}{
        padding-bottom:24rem;
        margin: 0 0 30rem 0;
        font-size: 24rem;
    }

    &:before {
        content: '';
        position: absolute;
        top: 50rem;
        left: 50%;
        transform: translateX(-50%);
        height: 4rem;
        width: 300rem;
        background: ${theme.colors.gradient};
        @media ${theme.media.mobile}{
            width: 290rem;
        }
    }`
const ProjectCardDescription = styled.p`
    width: 100%;
    align-self: flex-start;
    text-align: left;
    font-weight: 500;
    font-size: 18rem;
    color: ${theme.colors.font};
    margin: 0 0 50rem 0;
    @media ${theme.media.mobile}{
        font-size: 16rem;
        margin: 0 0 30rem 0;
        text-align: center;
    }`
// const BtnCard = styled(Btn)`
//     @media ${theme.media.mobile}{
//         width: 100%;
//     }`


