import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ButtonPropsType = {
    children?: string;
    as?: "a" | "button";
    href?: string;
    target?: "_blank";
    align?: string;
}


export const Button = ({children,as,href,align,target}: ButtonPropsType) => {
    return (
        <Btn $align={align} as={as} target={target} href={href}>{children}</Btn>
    );
};

 export const Btn = styled.button<{ $align?: string; }>`
    align-self: ${props => props.$align === "flex-start" ? "flex-start;" : "center;"}
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius: 83rem;
    font-weight: 600;
    font-size: 20rem;
    color: ${theme.colors.font};
    padding: 15rem 66rem;
    border: none;
    cursor: pointer;
    background: ${theme.colors.gradient};
    text-decoration: none;
    position: relative;
    z-index: 2;
     transition: opacity ${theme.transition};
    
    @media ${theme.media.mobile} {
        font-size: 18rem;
    }
     &:hover {
         opacity: 0.5;
     }
`