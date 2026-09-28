import photo from "../../../assets/images/photo.jpg"
import background from "../../../assets/images/background.svg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {theme} from "../../../styles/Theme.ts";

export const Main = () => {
    return (
        <SectionMain>
            <SectionMainWrapper className={"max-container"}>
                <FlexWrapper direction="column" mDirection={"column"}>
                    <h2>I am Sergey Zaharov</h2>
                    <h1>A Web Developer. </h1>
                    <Button align={"flex-start"} as={"a"} href={"#projects"}>Let’s Begin</Button>
                </FlexWrapper>
                <BackgroundWrapper>
                    <Photo src={photo} alt="photo"/>
                    <Background src={background} alt="background"/>
                </BackgroundWrapper>
            </SectionMainWrapper>
        </SectionMain>
    );
};
const SectionMain = styled.section`
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
