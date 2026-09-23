import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const Socials = () => {
    return (
        <Wrapper>
            <Icon iconId={"gitHub"} width={"32px"} height={"32px"} viewBox={"0 0 32 32"}/>
            <Icon iconId={"linkIn"} width={"32px"} height={"32px"} viewBox={"0 0 32 32"}/>
            <Icon iconId={"telegram"} width={"35px"} height={"30px"} viewBox={"0 0 35 30"}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 25px`