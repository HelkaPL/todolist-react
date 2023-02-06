import { Item, List, StyledNavLink } from "./styled";


function Navigation() {

    return (
            <nav>
                <List>
                    <Item>
                        <StyledNavLink to="/tasks">Lista zadań</StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to="/author">O autorze</StyledNavLink>
                    </Item>
                </List>    
            </nav>
    );
}

export default Navigation;