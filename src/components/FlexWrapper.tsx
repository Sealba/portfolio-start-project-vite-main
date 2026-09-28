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
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.align || "stretch"};
    justify-items: ${props => props.justify || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    gap: ${props => props.gap || "0px"};
    @media ${theme.media.mobile} {
        flex-direction: ${props => props.mDirection || "row"};
        align-items: ${props => props.mAlign || "stretch"};
        justify-items: ${props => props.mJustify || "flex-start"};
        flex-wrap: ${props => props.mWrap || "nowrap"};
        gap: ${props => props.mGap || "0px"};
    }

    h2 {
        font-weight: 600;
        font-size: 54rem;
        color: ${theme.colors.font};
        margin: 0 0 15rem 0;
        @media ${theme.media.mobile} {
            margin: 0 0 25rem 0;
            font-size: 36rem;
        }
    }

    h1 {
        font-weight: 500;
        font-size: 18rem;
        color: #bcbcbc;
        margin: 0 0 60rem 0;
        @media ${theme.media.mobile} {
            margin: 0 0 40rem 0;
            font-size: 16rem;
        }
    }
`

