import styled from "styled-components";
import {ProgressBar} from "../../../components/progressbar/ProgressBar.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Technologies = () => {
    return (
        <TechnologiesSection>
            <SectionTitle>Technologies</SectionTitle>
            <Content>
                <ProgressBar progress={60}>Html</ProgressBar>
                <ProgressBar progress={70}>CSS, Sass</ProgressBar>
                <ProgressBar progress={50}>React</ProgressBar>
                <ProgressBar progress={60}>Styled Components</ProgressBar>
            </Content>
            <AdditionalInfo>Additional technologies and skills</AdditionalInfo>
            <FlexWrapper align={"center"} gap={"50px"}>
                <Icon iconId={"git"} href={"https://git-scm.com/"} as={"a"} width={"100px"} height={"100px"}
                      viewBox={"0 0 100px 100px"}></Icon>
                <Icon iconId={"gitHub2"} href={"https://github.com/Sealba"} as={"a"} width={"100px"} height={"100px"}
                      viewBox={"0 0 100px 100px"}></Icon>
                <Icon iconId={"figma"} href={"https://www.figma.com/"} as={"a"} width={"100px"} height={"100px"}
                      viewBox={"0 0 100px 100px"}></Icon>
            </FlexWrapper>
        </TechnologiesSection>
    );
};

const TechnologiesSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 150px 170px 150px;
    background: #0f1624;`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    margin: 0 auto 120px auto;
    gap: 25px;`
const AdditionalInfo = styled.p`;
    font-weight: 600;
    font-size: 44px;
    color: #fff;
    text-align: center;
    margin: 0 0 70px 0;`
