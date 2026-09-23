import styled from "styled-components";

type FlexWrapperPropsType = {
    justify?: string;
    align?: string;
    direction?: string;
    wrap?: string;
}

export const FlexWrapper =styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: ${props => props.align || "stretch"};
    justify-items: ${props => props.justify || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
    
    h2{
        font-weight: 600;
        font-size: 54px;
        color: #fff;
        margin: 0 0 15px 0;
    }
    h1{
        font-weight: 500;
        font-size: 18px;
        color: #bcbcbc;
        margin: 0 0 60px 0;
    }
`

