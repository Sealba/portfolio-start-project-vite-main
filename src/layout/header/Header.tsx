import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Socials} from "../../components/socials/Socials.tsx";
import {theme} from "../../styles/Theme.ts";
import {MobileMenu} from "../../components/mobilemenu/MobileMenu.tsx";
import {Icon} from "../../components/icon/Icon.tsx";
import {useState} from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StyledHeader>
                <StyledHeaderWrapper className={"max-container"}>
                    <Logo/>
                    <Menu/>
                    <Socials/>
                </StyledHeaderWrapper>
            </StyledHeader>
            <StyledHeaderMobile>
                <StyledHeaderWrapper className={"max-container"}>
                    <Logo/>
                    <BurgerMenu aria-label={open ? "close" : "open"} aria-haspopup={"menu"} onClick={()=>{setOpen(!open)}}><Icon iconId={open ? "close" : "burger"} width={"32rem"} height={"32rem"} viewBox={"0 0 32 32"} as={'svg'}/></BurgerMenu>
                </StyledHeaderWrapper>
            </StyledHeaderMobile>
            {open ? <MobileMenu onLinkClick={()=>setOpen(false)}/> : null }
        </>
    );
};

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: ${theme.colors.mainBg};
    border-bottom: 1rem solid #192630;
    @media ${theme.media.mobile} {
        display: none;
    }
`
const StyledHeaderWrapper = styled.div`
    padding: 26rem 150rem 26rem 150rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media ${theme.media.mobile} {
        justify-content: space-between;
        padding: 26rem 24rem 26rem 24rem;
    }`

const StyledHeaderMobile = styled.header`
    display: none;
    @media ${theme.media.mobile} {
        display: block;
        position: sticky;
        top: 0;
        z-index: 5;
        background-color: ${theme.colors.mainBg};
        border-bottom: 1rem solid #192630;
    }
`
const BurgerMenu = styled.button`
    width: 32rem;
    height: 32rem;
    display: flex;
    align-items: center;
    justify-content: center;`