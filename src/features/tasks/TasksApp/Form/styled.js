import styled from "styled-components";

export const Box = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px 12px;
    border: none;
    color: #fff;
    background-color: hsl(180, 100%, 25%);
    cursor: pointer;
    transition: transform .3s, background-color .3s;

    &:hover {
        background-color: #009999;
        transform: scale(1.05);
    }
`;