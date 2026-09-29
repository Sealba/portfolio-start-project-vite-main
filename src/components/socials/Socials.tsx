import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {SocialsData} from "../../mocks/mock.ts";


export const Socials = () => {
    return (
        <Wrapper>
            {SocialsData.map((item) => {
                return <Icon key={item.id + item.svgId} href={item.link} iconId={item.svgId} as={item.type}
                             width={item.width} height={item.height} viewBox={item.viewbox}/>
            })}

        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 25rem`