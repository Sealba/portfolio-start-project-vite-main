import styled from "styled-components";
import {Socials} from "../../components/socials/Socials.tsx";
import {theme} from "../../styles/Theme.ts";


export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper className={"max-container"}>
                <InfoWrapper>
                    <Info>
                        <InfoText>Call me:</InfoText>
                        <InfoText>+375-25-902-99-16</InfoText>
                    </Info>
                    <Info>
                        <InfoText>Email:</InfoText>
                        <InfoText>Liprik1516@gmail.com</InfoText>
                    </Info>
                </InfoWrapper>
                <Socials></Socials>
            </FooterWrapper>
        </FooterContainer>
    );
};
const FooterContainer = styled.footer`
    background: ${theme.colors.mainBg};`
const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 42rem 150rem 42rem 150rem;
    @media ${theme.media.mobile} {
        padding: 30rem 15rem 47rem 15rem;
        flex-direction: column;
        gap: 56rem;
    }
`

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 163rem;
    align-items: center;
    width: 100%;
    @media ${theme.media.mobile} {
        gap: 20rem;
        justify-content: space-between;
    }`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    @media ${theme.media.mobile} {
        
    }`
const InfoText = styled.p`
    font-weight: 600;
    font-size: 22rem;
    color: ${theme.colors.font};
    margin: 0;
    @media ${theme.media.mobile} {
        font-size: 15rem;
    }`