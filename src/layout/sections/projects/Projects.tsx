import styled from "styled-components";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {ProjectsData} from "../../../App.tsx";
import {ProjectCard} from "../../../components/projectcard/ProjectCard.tsx";


export const Projects = () => {
    return (
        <ProjectSections>
            <SectionTitle>Projects</SectionTitle>
            <ProjectCards>
                {ProjectsData.map((item, index) => {
                    return <ProjectCard key={index} link={item.link} description={item.description} name={item.name}
                                        image={item.image}></ProjectCard>
                })}
            </ProjectCards>
        </ProjectSections>
    );
};

const ProjectSections = styled.section`
    position: relative;
    z-index: -1;
    background: #161d2a;
    padding: 140px 150px 140px 150px;
`
const ProjectCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 40px;
    row-gap: 60px;
    margin: 0 auto;`

