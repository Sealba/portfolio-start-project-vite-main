import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Projects</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">About me</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul{
        display: flex;
        flex-direction: row;
        gap: 80px;
        list-style: none;
    }
    li{
        a{
            text-decoration: none;
            font-weight: 500;
            font-size: 16px;
            color: #fff;
            cursor: pointer;
        }
    }
`