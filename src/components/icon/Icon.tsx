import IconsSprite from "../../assets/images/icons-sprite.svg"
import styled from "styled-components";

type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    as: "a" | "svg";
    href?: string;
}

type IconPropsTypeStyle = {
    width?: string;
    height?: string;
}


export const Icon = (props: IconPropsType) => {
const { href, iconId, as, width, height, viewBox} = props;

    const SVG = () => <svg
        width={width || "50"}
        height={height || "50"}
        viewBox={viewBox || "0 0 50 50"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${IconsSprite}#${iconId}`}></use>
    </svg>;


    return as === "a" ? <IconLink width={props.width} height={props.height} href={href} target={"_blank"}><SVG/></IconLink> : <SVG/>
};

const IconLink = styled.a<IconPropsTypeStyle>`
    display: flex;
    text-decoration: none;
    cursor: pointer;
    width: ${props => props.width || "50px"};
    height: ${props => props.height || "50px"};
`
