import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllTaskDone } from "../../taskSlice";
import { Externals, Button } from "./styled";


const ExternalsButtons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch()
    return tasks.length > 0 && (
    <Externals>
        <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? 'Pokaż' : 'Ukryj'} zakończone
        </Button>
        <Button
            onClick={() => dispatch(setAllTaskDone())} 
            disabled={tasks.every(({ done }) => done)}
        >
        Ukończ wszystkie
        </Button>
    </Externals>
    )
    }
export default ExternalsButtons;