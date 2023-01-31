import styled from "styled-components";

export const Box = styled.section`
    position: relative;
    margin: 20px 0;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0 0 10px #999;
`;

export const Body = styled.div`
        margin: 0;
        padding: 20px;
    `;

export const Title = styled(Body)`
        border-bottom: 3px solid #bbb;
    `;




