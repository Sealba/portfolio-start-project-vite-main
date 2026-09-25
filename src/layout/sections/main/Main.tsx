import photo from "../../../assets/images/photo.jpg"
import background from "../../../assets/images/background.svg"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Button} from "../../../components/button/Button.tsx";

export const Main = () => {
    return (
        <SectionMain>
            <FlexWrapper direction="column">
                <h2>I am Sergey Zaharov</h2>
                <h1>A Web Developer. </h1>
                <Button align={"flex-start"}>Let’s Begin</Button>
            </FlexWrapper>
            <BackgroundWrapper>
            <Photo src={photo} alt="photo"/>
            <Background src={background} alt="background" />
            </BackgroundWrapper>
        </SectionMain>
    );
};
const SectionMain = styled.section`
    position: relative;
    overflow-y: visible;
    overflow-x: clip;
    z-index: 2;
    display: flex;
    flex-direction: row;
    background: #0f1624;
    padding: 125px 150px 125px 150px;
    gap: 89px;
    align-items: center;
    justify-content: center;
`

 const Photo = styled.img`
     width: 380px;
     height: 450px;
     object-fit: cover;
     object-position: top center;
     border-radius: 50px 0 50px 0;
 `
const BackgroundWrapper = styled.div`
position: relative;
width: fit-content;
`
const Background = styled.img`
    position: absolute;
    width:666px;
    top: 61px;
    right: -272px;
    z-index: -1;
`
