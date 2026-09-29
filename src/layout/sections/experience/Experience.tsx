import styled from "styled-components";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Experience = () => {

    return (
        <ExperienceSection id={"experience"}>
            <ExperiencceWrapperColor className={"max-container"}>
                <SectionTitle>Experience</SectionTitle>
                <ExperienceWrapper>
                    <ExperienceDate>
                        <DateDotWrapper>
                            <Date>2018</Date>
                            <Dot/>
                        </DateDotWrapper>
                        <Text>
                            Completed a bachelor's degree at the university.</Text>
                    </ExperienceDate>
                    <ExperienceDate>
                        <DateDotWrapper>
                            <Date>2020</Date>
                            <Dot/>
                        </DateDotWrapper>
                        <Text>
                            Completed my master's degree and began learning object-oriented programming principles by
                            working on real-world tasks.</Text>
                    </ExperienceDate>
                    <ExperienceDate>
                        <DateDotWrapper>
                            <Date>2025</Date>
                            <Dot/>
                        </DateDotWrapper>
                        <Text>
                            Gained four years of experience in PLC programming and acquired basic knowledge of backend
                            development using PHP.</Text>
                    </ExperienceDate>
                    <ExperienceDate>
                        <DateDotWrapper>
                            <Date>2026</Date>
                            <Dot/>
                        </DateDotWrapper>
                        <Text>I am actively working on and learning frontend development with React.</Text>
                    </ExperienceDate>
                </ExperienceWrapper>
            </ExperiencceWrapperColor>
        </ExperienceSection>
    );
};

const ExperienceSection = styled.section`
    background: ${theme.colors.secondaryBg};
`
const ExperiencceWrapperColor = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100rem 150rem 140rem 150rem;
    margin: 0;
    @media ${theme.media.mobile} {
        padding: 70rem 15rem 100rem 15rem;
    }
`
const ExperienceWrapper = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    max-width: 1150rem;
    align-items: flex-start;
    z-index: 1;
    gap: 34rem;
    margin: 0 auto;

    &:before {
        position: absolute;
        top: 47rem;
        content: '';
        display: flex;
        width: 76%;
        height: 8rem;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
        background: ${theme.colors.gradient};
        @media ${theme.media.mobile} {
            transform: none;
            width: 8rem;
            top: 26rem;
            height: 80%;
            left: 8rem;
            background: linear-gradient(360deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);;
        }
    }

    @media ${theme.media.mobile} {
        flex-direction: column;
    };
`
const ExperienceDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20rem;
    width: 100%;
    @media ${theme.media.mobile} {
        flex-direction: column;
        gap: 10rem;
    }
`
const Text = styled.p`
    font-weight: 500;
    font-size: 18rem;
    text-align: center;
    color: ${theme.colors.font};
    margin: 0;
    @media ${theme.media.mobile} {
        font-size: 16rem;
        margin-left: 45rem;
        text-align: start;
    }
`
const DateDotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    align-items: center;
    justify-content: center;
    @media ${theme.media.mobile} {
        flex-direction: row-reverse;
        gap: 20rem;
        align-items: center;
        justify-content: start;
        align-self: start;
    }`
const Date = styled.p`
    font-weight: 600;
    font-size: 26rem;
    color: ${theme.colors.font};
    margin: 0;
`
const Dot = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 25rem;
    border-radius: 100%;
    background: ${theme.colors.font};`