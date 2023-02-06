import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    margin: 0;
    padding: 10px;
    border-bottom: 1px solid #bbb;

   ${({ hidden }) => hidden && css`
        display: none;
   `}; 

   &:last-of-type {
        border-bottom: none;
   };
`;

export const Button = styled.button`
    width: 40px;
    height: 40px;
    padding: 10px 12px;
    border: none;
    color: ${({theme}) => theme.color.white};
    cursor: pointer;
    transition: color 0.3s, background-color 0.3s;

    ${({ remove }) => remove && css`
        background-color: #dc143c;
        
        &:hover {
            background-color: #ec365b;
    }
    `};

    ${({ toggleDone }) => toggleDone && css`
        background-color: #008000;
        
        &:hover {
            background-color: #01ae01;
    }
    `};
`;

export const Content = styled.span`
    padding: 0 15px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `};
`;