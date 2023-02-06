import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../features/tasks/taskSlice";
import { StyledButton } from "./styled";


const ButtonFetch = () => {
    const dispatch = useDispatch()
    return (
        <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </StyledButton>
    )
    }
export default ButtonFetch;