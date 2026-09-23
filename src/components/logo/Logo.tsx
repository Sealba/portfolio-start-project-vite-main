import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";


export const Logo = () => {
    return (
        <Link href="/">
            <Icon iconId={"codeSvg"}/>
            <IconText>Portfolio</IconText>
        </Link>
    );
};


const Link = styled.a`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    align-items: center;
    gap: 13px;
    cursor: pointer;`


const IconText = styled.p`
    font-weight: 500;
    font-size: 30px;
    color: #fff;
`