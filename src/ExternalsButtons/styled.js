import styled, { css } from "styled-components";

export const Button = styled.button`
    margin: 0;
    padding: 5px 10px;
    border: none;
    color: #007f80;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #00cccc;
    }

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.color.silver};
        cursor: default;

        &:hover {
            color: ${({ theme }) => theme.color.silver};
            
        }
    `}
`;

export const Externals = styled.div`
    position: absolute;
    top: 20px;
    right: 5px;

    @media (max-width: 530px) {
        position: relative;
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
    }

    ${({ hide }) => hide && css`
        display: none;
    `}
`;
