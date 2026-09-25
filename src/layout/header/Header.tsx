
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
    position: sticky;
    top: 0;
    z-index: 5;
    padding: 26px 150px 26px 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #192630;
`