import styled from "styled-components";
import {theme} from "../../../styles/Theme.ts";
import {SectionTitle} from "../../../components/sectiontitle/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";

export const Contact = () => {
    return (
        <ContactSection>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <ContactForm action={"/"} method={"POST"}>
                    <BackgroundWrapper>
                        <Field type={"textarea"} placeholder={"Your name..."} />
                    </BackgroundWrapper>
                    <BackgroundWrapper>
                        <Field type={"textarea"} placeholder={"Your Email..."} />
                    </BackgroundWrapper>
                    <BackgroundWrapper>
                        <Field as={"textarea"} placeholder={"Your message..."} />
                    </BackgroundWrapper>
                    <Btn type={"submit"}>Send</Btn>
                </ContactForm>
            </Container>
        </ContactSection>
    );
};


const ContactSection = styled.section`
    padding: 100px 0;
    background: ${theme.colors.mainBg};
    width: 100%;
`

const ContactForm = styled.form`
    max-width: 540px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16rem;
    textarea{
        resize: none;
        height: 155px;
    }
`
const Field = styled.input`
    width: 100%;
    min-height: 32px;
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font};
    padding: 10px 7px 10px 7px;
`
const BackgroundWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 2px;
    background: ${theme.colors.gradient};
`
 const Btn = styled.button<{ $align?: string; }>`
     align-self: ${props => props.$align === "flex-start" ? "flex-start;" : "center;"}
     display: flex;
     align-items: center;
     justify-content: center;
     width: fit-content;
     border-radius: 83px;
     font-weight: 600;
     font-size: 20px;
     color: ${theme.colors.font};
     padding: 15px 66px;
     border: none;
     cursor: pointer;
     background: ${theme.colors.gradient};
     text-decoration: none;
     position: relative;
     z-index: 2;
     transition: opacity ${theme.transition};
     margin-top: 25px;

     @media ${theme.media.mobile} {
         font-size: 18px;
     }

     &:hover {
         opacity: 0.5;
     }
 `

