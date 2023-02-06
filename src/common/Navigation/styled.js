import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    &.active {
        font-weight: bold;
    };
    &:hover {
        border-bottom: solid 1px white;
    };
`;

export const List = styled.ul`
    background-color: ${({ theme }) => theme.color.teal};
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
`;

export const Item = styled.li`
    padding: 20px;
`;