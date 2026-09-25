import styled from "styled-components";

type ProgressBarPropsType = {
    children?: React.ReactNode;
    progress: number;
}

export const ProgressBar = (props: ProgressBarPropsType) => {
    return (
        <ProgressList>
            <ProgressText>{props.children}</ProgressText>
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
const ProgressText = styled.p`
    font-weight: 600;
    font-size: 24px;
    color: #fff;
    margin: 0 0 0 18px;`
const ContentBar = styled.div<{ $progress?: number; }>`
    width: 100%;
    height: 18px;
    background-color: #162950;
    border-radius: 23px;
    &:after {
        display: flex;
        width: ${props => props.$progress ? `${props.$progress}%` : 0};
        border-radius: 23px;
        height: 18px;
        content: '';
        background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
    }
`
