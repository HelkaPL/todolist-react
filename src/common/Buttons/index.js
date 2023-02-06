import { useSelector, useDispatch } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../features/tasks/taskSlice";
import { StyledButton } from "./styled";


const ButtonFetch = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <StyledButton onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </StyledButton>
    )
    }
export default ButtonFetch;