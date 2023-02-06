import styled from "styled-components";

export const StyledButton = styled.button`
    position: absolute;
    top: 20px;
    right: 5px;

    @media (max-width: 576px) {
        position: relative;
        top: 0;
        right: 0;
        display: flex;
        justify-content: flex-end;
    }
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

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: default;
    }
`;