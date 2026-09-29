import styled from "styled-components";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {ProjectsData} from "../../../App.tsx";
import {ProjectCard} from "../../../components/projectcard/ProjectCard.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Projects = () => {
    return (
        <ProjectSections id={"projects"}>
            <ProjectsWrapper className={"max-container"}>
                <SectionTitle>Projects</SectionTitle>
                <ProjectCards>
                    {ProjectsData.map((item, index) => {
                        return <ProjectCard key={item.id + index + "Projects"} link={item.link} description={item.description}
                                            name={item.name}
                                            image={item.image}></ProjectCard>
                    })}
                </ProjectCards>
            </ProjectsWrapper>
        </ProjectSections>
    );
};

const ProjectSections = styled.section`
    position: relative;
    z-index: 0;
    background: ${theme.colors.secondaryBg};
`
const ProjectsWrapper = styled.div`
    padding: 140rem 150rem 140rem 150rem;
    @media ${theme.media.mobile} {
        padding: 70rem 15rem 70rem 15rem;
    }
`
const ProjectCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40rem;
    row-gap: 60rem;
    margin: 0 auto;
    @media ${theme.media.mobile} {
        grid-template-columns: 1fr;
        gap: 30rem;
    }`

