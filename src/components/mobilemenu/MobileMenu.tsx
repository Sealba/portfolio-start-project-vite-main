import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Link} from 'react-scroll';

type MobileMenuPropsType = {
    onLinkClick?: () => void;
}

export const MobileMenu = ({onLinkClick}: MobileMenuPropsType) => {
    return (
        <StyledMenu aria-modal={true}>
            <ul>
                <li><Anchor onClick={onLinkClick} offset={-60} to="projects">Projects</Anchor></li>
                <li><Anchor onClick={onLinkClick} offset={-60} to="technologies">Technologies</Anchor></li>
                <li><Anchor onClick={onLinkClick} offset={-60} to="experience">About me</Anchor></li>
                <li><Anchor onClick={onLinkClick} offset={-60} to="contact">Сontact</Anchor></li>
            </ul>

        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    position: fixed;
    z-index: 6;
    top: 100rem;
    left: 0;
    height: 100dvh;
    width: 100%;
    background: ${theme.colors.mainBg};

    ul {
        display: flex;
        flex-direction: row;
        gap: 80rem;
        list-style: none;
        @media ${theme.media.mobile} {
            gap: 20rem;
            flex-direction: column;
            align-items: center ;
            justify-content: center;
            height: 100%;
        }
    }


    li {
        a {
            text-decoration: none;
            font-weight: 500;
            font-size: 16rem;
            color: ${theme.colors.font};
            cursor: pointer;
            transition: color ${theme.transition};
            scroll-behavior: smooth;

            &:hover {
                color: ${theme.colors.hover};
            }
        }
    }
`
const Anchor = styled(Link)`
    text-decoration: none;
    font-weight: 500;
    font-size: 16rem;
    color: ${theme.colors.font};
    cursor: pointer;
    transition: color ${theme.transition};
    scroll-behavior: smooth;

    &:hover {
        color: ${theme.colors.hover};
    }`
