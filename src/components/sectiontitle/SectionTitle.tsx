import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type SectionTitlePropsType = {
    children: string;
}

export const SectionTitle = ({children} : SectionTitlePropsType) => {
    return (
        <Title>{children}</Title>
    );
};

const Title = styled.h2`
    font-weight: 600;
    font-size: 46rem;
    color: ${theme.colors.font};
    align-self: flex-start;
    margin-top: 0;
    margin-bottom: 70rem;
    @media ${theme.media.mobile}{
        font-size: 32rem;
        margin-bottom: 30rem;  
    }
`
