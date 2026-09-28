import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";


export const Logo = () => {
    return (
        <Link href="/">
            <Icon iconId={"codeSvg"} as={"svg"} width={"50rem"} height={"50rem"} viewBox={"0 0 50 50"}/>
            <IconText>Portfolio</IconText>
        </Link>
    );
};


const Link = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items: center;
    gap: 13rem;
    cursor: pointer;`


const IconText = styled.p`
    font-weight: 500;
    font-size: 30rem;
    color: ${theme.colors.font};
`