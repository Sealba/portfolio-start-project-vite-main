import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";
import {Link} from "react-scroll";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><Anchor to={"projects"}>Projects</Anchor></li>
                <li><Anchor offset={-20} to={"technologies"}>Technologies</Anchor></li>
                <li><Anchor offset={-20} to={"experience"}>About me</Anchor></li>
                <li><Anchor to={"contact"}>Contact</Anchor></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: 80rem;
        list-style: none;
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

        @media ${theme.media.mobile} {
            display: none;
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
    }
`
