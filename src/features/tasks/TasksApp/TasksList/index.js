import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeTask, selectTasks, toggleTaskDone } from "../../taskSlice";
import { List, Item, Button, Content } from "./styled";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                <Button
                    toggleDone
                    onClick={() => dispatch(toggleTaskDone(task.id))}
                >
                    {task.done ? '✔' : ''}
                </Button>
                <Content done={task.done}>
                    <Link to={`/tasks/${task.id}`}>{task.content}</Link>
                </Content>
                <Button
                    remove
                    onClick={() => dispatch(removeTask(task.id))}
                >
                    &#128465;
                </Button>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;