
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Socials} from "../../components/socials/Socials.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Socials/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #0F1624;
    padding: 26px 150px 26px 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`