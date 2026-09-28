import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";


export const Socials = () => {
    return (
        <Wrapper>
            <Icon as={"a"} href={"https://github.com/Sealba"} iconId={"gitHub"} width={"32rem"} height={"32rem"}
                  viewBox={"0 0 32 32"}/>
            <Icon as={"a"} href={"/"} iconId={"linkIn"} width={"32rem"} height={"32rem"} viewBox={"0 0 32 32"}/>
            <Icon as={"a"} href={"https://t.me/Sealba"} iconId={"telegram"} width={"35rem"} height={"30rem"}
                  viewBox={"0 0 35 30"}/>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 25rem`