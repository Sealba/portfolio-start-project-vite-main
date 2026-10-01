import styled from "styled-components";
import {theme} from "../../styles/Theme.ts";

type ProgressBarPropsType = {
    text: string;
    progress: number;
}

export const ProgressBar = (props: ProgressBarPropsType) => {
    return (
        <ProgressList>
            <ProgressText>{props.text}</ProgressText>
            <ContentBar $progress={props.progress > 100 ? 100 : props.progress < 0 ? 0 : props.progress}></ContentBar>
        </ProgressList>
    );
};

const ProgressList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
`
const ProgressText = styled.h3`
    font-weight: 600;
    font-size: 24rem;
    color: ${theme.colors.font};
    margin: 0 0 0 18rem;`
const ContentBar = styled.div<{ $progress?: number; }>`
    width: 100%;
    height: 18rem;
    background-color: #162950;
    border-radius: 23rem;
    &:after {
        display: flex;
        width: ${props => props.$progress ? `${props.$progress}%` : 0};
        border-radius: 23rem;
        height: 18rem;
        content: '';
        background: ${theme.colors.gradient};
    }
`
