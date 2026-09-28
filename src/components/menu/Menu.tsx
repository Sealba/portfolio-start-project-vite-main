import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#technologies">Technologies</a></li>
                <li><a href="#experience">About me</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        flex-direction: row;
        gap: 80rem;
        list-style: none;
    }
    li{
        a{
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
    @media ${theme.media.mobile} {
        display: none;
    }
`