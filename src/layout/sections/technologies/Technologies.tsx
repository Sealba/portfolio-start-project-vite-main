import styled from "styled-components";
import {ProgressBar} from "../../../components/progressbar/ProgressBar.tsx";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {theme} from "../../../styles/Theme.ts";
import {ProgressBarData, SocialsDataTechnologiesMobile} from "../../../mocks/mock.ts";
 import {SocialsDataTechnologies} from "../../../mocks/mock.ts";

export const Technologies = () => {
    return (
        <TechnologiesSection id={"technologies"}>
            <TechnologiesWrapper className={"max-container"}>
                <SectionTitle>Technologies</SectionTitle>
                <Content>
                    {ProgressBarData.map((item, index) => {
                        return <ProgressBar key={item.id + index + "ProgressBar"} progress={item.progress}
                                            text={item.text}/>
                    })}
                </Content>
                <AdditionalInfo>Additional technologies and skills</AdditionalInfo>
                <FlexWrapperTechnologies align={"center"} gap={"50rem"}>
                    {SocialsDataTechnologies.map((items, index) => {
                        return <Icon key={items.id + index + "Icon"} as={items.type} iconId={items.svgId} href={items.link} width={items.width} height={items.height} viewBox={items.viewbox} />
                    })}
                </FlexWrapperTechnologies>
                <FlexWrapperTechnologiesMobile mAlign={"center"} mGap={"30rem"}>
                    {SocialsDataTechnologiesMobile.map((items, index) => {
                        return <Icon key={items.id + index + "IconMobile"} as={items.type} iconId={items.svgId} href={items.link} width={items.width} height={items.height} viewBox={items.viewbox} />
                    })}
                </FlexWrapperTechnologiesMobile>
            </TechnologiesWrapper>
        </TechnologiesSection>
    )
        ;
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
