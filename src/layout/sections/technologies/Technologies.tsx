import styled from "styled-components";
import {ProgressBar} from "../../../components/progressbar/ProgressBar.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";


export const Technologies = () => {
    return (
        <TechnologiesSection id={"technologies"}>
            <TechnologiesWrapper className={"max-container"}>
                <SectionTitle>Technologies</SectionTitle>
                <Content>
                    <ProgressBar progress={60}>Html</ProgressBar>
                    <ProgressBar progress={70}>CSS, Sass</ProgressBar>
                    <ProgressBar progress={50}>React</ProgressBar>
                    <ProgressBar progress={60}>Styled Components</ProgressBar>
                </Content>
                <AdditionalInfo>Additional technologies and skills</AdditionalInfo>
                <FlexWrapperTechnologies align={"center"} gap={"50rem"} >
                    <Icon iconId={"git"} href={"https://git-scm.com/"} as={"a"} width={"100rem"} height={"100rem"}
                          viewBox={"0 0 100 100"}></Icon>
                    <Icon iconId={"gitHub2"} href={"https://github.com/Sealba"} as={"a"} width={"100rem"}
                          height={"100rem"}
                          viewBox={"0 0 100 100"}></Icon>
                    <Icon iconId={"figma"} href={"https://www.figma.com/"} as={"a"} width={"100rem"} height={"100rem"}
                          viewBox={"0 0 100 100"}></Icon>
                </FlexWrapperTechnologies>
                <FlexWrapperTechnologiesMobile mAlign={"center"} mGap={"30rem"}>
                    <Icon iconId={"git"} href={"https://git-scm.com/"} as={"a"} width={"60rem"} height={"60rem"}
                          viewBox={"0 0 100 100"}></Icon>
                    <Icon iconId={"gitHub2"} href={"https://github.com/Sealba"} as={"a"} width={"60rem"}
                          height={"60rem"}
                          viewBox={"0 0 100 100"}></Icon>
                    <Icon iconId={"figma"} href={"https://www.figma.com/"} as={"a"} width={"60rem"} height={"60rem"}
                          viewBox={"0 0 100 100"}></Icon>
                </FlexWrapperTechnologiesMobile>
            </TechnologiesWrapper>
        </TechnologiesSection>
    );
};

const TechnologiesSection = styled.section`
    background: ${theme.colors.mainBg};`

const TechnologiesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100rem 150rem 170rem 150rem;
    @media ${theme.media.mobile} {
        padding: 70rem 15rem 110rem 15rem;
    }
    
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900rem;
    margin: 0 auto 120rem auto;
    gap: 25rem;
@media ${theme.media.mobile} {
    margin: 0 auto 85rem auto;
}`
const AdditionalInfo = styled.h3`;
    font-weight: 600;
    font-size: 44rem;
    color: ${theme.colors.font};
    text-align: center;
    margin: 0 0 70rem 0;
    @media ${theme.media.mobile} {
        font-size: 27rem;
        margin: 0 auto 40rem auto;
    }`
const FlexWrapperTechnologies = styled(FlexWrapper)`
    @media ${theme.media.mobile} {
        display: none;
    }`
const FlexWrapperTechnologiesMobile = styled(FlexWrapper)`
    display: none;
@media ${theme.media.mobile} {
    display: flex;
}`
