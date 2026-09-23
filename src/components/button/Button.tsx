import styled from "styled-components";

type ButtonPropsType = {
    children?: string;
}


export const Button = ({children}:ButtonPropsType) => {
    return (
       <Btn>{children}</Btn>
    );
};

const Btn=styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    border-radius: 83px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    height: 60px;
    padding: 15px 66px;
    border: none;
    cursor: pointer;
    background: linear-gradient(270deg, #13adc7 0%, #6978d1 66.67%, #945dd6 100%);
`