import { Externals, Button } from "./styled";

const ExternalsButtons = ({ tasks, hideDone, toggleHideDone, setAllTaskDone}) => {
    return tasks.length > 0 && (
    <Externals>
        <Button onClick={toggleHideDone}>
            {hideDone ? 'Pokaż' : 'Ukryj'} zakończone
        </Button>
        <Button
            onClick={setAllTaskDone} 
            disabled={tasks.every(({ done }) => done)}
        >
        Ukończ wszystkie
        </Button>
    </Externals>
    )
    }
export default ExternalsButtons;