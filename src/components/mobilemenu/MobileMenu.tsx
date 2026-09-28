import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type MobileMenuPropsType = {
    onLinkClick?: () => void;
}

export const MobileMenu = ({onLinkClick}: MobileMenuPropsType) => {
    return (
        <StyledMenu>

            <ul>
                <li><a onClick={onLinkClick} href="#projects">Projects</a></li>
                <li><a onClick={onLinkClick} href="#technologies">Technologies</a></li>
                <li><a onClick={onLinkClick} href="#experience">About me</a></li>
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

            &:hover {
                color: ${theme.colors.hover};
            }
        }
    }
`