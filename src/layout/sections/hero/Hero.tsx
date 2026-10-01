import photo from "../../../assets/images/photo.jpg"
import background from "../../../assets/images/background.svg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Hero = () => {
    return (
        <SectionHero>
            <SectionMainWrapper className={"max-container"}>
                <FlexWrapper direction="column" mDirection={"column"}>
                    <TextName>I am Sergey Zaharov</TextName>
                    <TextAbout>A Web Developer.</TextAbout>
                    <Button align={"flex-start"} as={"a"} href={"#projects"}>Let’s Begin</Button>
                </FlexWrapper>
                <BackgroundWrapper>
                    <Photo src={photo} alt="photo"/>
                    <Background src={background} alt="background"/>
                </BackgroundWrapper>
            </SectionMainWrapper>
        </SectionHero>
    );
};
const SectionHero = styled.section`
    position: relative;
    overflow-y: visible;
    overflow-x: clip;
    z-index: 2;
    background: ${theme.colors.mainBg};
`
const SectionMainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 125rem 150rem 125rem 150rem;
    gap: 89rem;
    align-items: center;
    justify-content: center;
    @media ${theme.media.mobile} {
        flex-direction: column-reverse;
        padding: 30rem 20rem 70rem 20rem;
        gap: 50rem;
    }
`

const Photo = styled.img`
    width: 380rem;
    height: 450rem;
    object-fit: cover;
    object-position: top center;
    border-radius: 50rem 0 50rem 0;
    @media ${theme.media.mobile} {
        width: 335rem;
        height: 400rem;
    }
`
const BackgroundWrapper = styled.div`
    position: relative;
    width: fit-content;
    padding: 2rem;
    border-radius: 50rem 0 50rem 0;
    overflow: hidden;
    background: ${theme.colors.gradient};
`
const Background = styled.img`
    position: absolute;
    width: 666rem;
    top: 61rem;
    right: -272rem;
    z-index: -1;
    @media ${theme.media.mobile} {
        top: 223rem;
        right: -383rem;
    }
`
const TextName = styled.h2`
    font-weight: 600;
    font-size: 54rem;
    color: ${theme.colors.font};
    margin: 0 0 15rem 0;
    @media ${theme.media.mobile} {
        margin: 0 0 25rem 0;
        font-size: 36rem;
    }
`

const TextAbout = styled.h1`
    font-weight: 500;
    font-size: 18rem;
    color: #bcbcbc;
    margin: 0 0 60rem 0;
    @media ${theme.media.mobile} {
        margin: 0 0 40rem 0;
        font-size: 16rem;
    }
`