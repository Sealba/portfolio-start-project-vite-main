import styled from "styled-components";
import {theme} from "../styles/Theme.ts";

type FlexWrapperPropsType = {
    justify?: string;
    align?: string;
    direction?: string;
    wrap?: string;
    gap?: string;
    mJustify?: string;
    mAlign?: string;
    mDirection?: string;
    mWrap?: string;
    mGap?: string;
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || null};
    align-items: ${props => props.align || null};
    justify-items: ${props => props.justify || null};
    flex-wrap: ${props => props.wrap || null};
    gap: ${props => props.gap || null};
    @media ${theme.media.mobile} {
        flex-direction: ${props => props.mDirection || "row"};
        align-items: ${props => props.mAlign || "stretch"};
        justify-items: ${props => props.mJustify || "flex-start"};
        flex-wrap: ${props => props.mWrap || "nowrap"};
        gap: ${props => props.mGap || "0px"};
    }
`

