import styled from "styled-components";

type ButtonPropsType = {
    children?: string;
    as?: "a" | "button";
    href?: string;
    align?: string;
}


export const Button = ({children,as,href,align}: ButtonPropsType) => {
    return (
        <Btn $align={align} as={as} href={href}>{children}</Btn>
    );
};

const Btn = styled.button<{ $align?: string; }>`
    align-self: ${props => props.$align === "flex-start" ? "flex-start;" : "center;"}
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius: 83px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    padding: 15px 66px;
    border: none;
    cursor: pointer;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    text-decoration: none;
`