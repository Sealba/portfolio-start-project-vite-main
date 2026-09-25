import styled from "styled-components";

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
    font-size: 46px;
    color: #fff;
    align-self: flex-start;
    margin-bottom: 70px;
`
