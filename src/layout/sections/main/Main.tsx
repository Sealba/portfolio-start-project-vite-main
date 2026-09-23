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
                <Button>Let’s Begin</Button>
            </FlexWrapper>
            <Photo src={photo} alt="photo"/>
            <Background src={background} alt="background" />
        </SectionMain>
    );
};
const SectionMain = styled.section`
    position: relative;
    overflow: hidden;
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
const Background = styled.img`
    position: absolute;
    width:546px;
    top: 186px;
    right: 0;
    z-index: -1;
`