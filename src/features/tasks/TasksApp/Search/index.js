import { useLocation } from "react-router-dom";
import Input from "../Input"

export default () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj")
    return (
    //<Wrapper>
        <Input 
            placeholder="Filtruj zadania"
            value={query || ""}    
        />
    //</Wrapper>
    );
};