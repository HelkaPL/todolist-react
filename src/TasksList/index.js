import { List, Item, Button, Content } from "./styled";

const TasksList = ( {tasks, hideDone, removeTask, toggleTaskDone} ) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
            <Button
                toggleDone
                onClick={() => toggleTaskDone(task.id)}
            >
                {task.done ? '✔' : ''}
            </Button>
            <Content 
                done={task.done}
            >
                {task.content}
            </Content>
            <Button
                remove
                onClick={() => removeTask(task.id)}
            >
                &#128465;
            </Button>
            </Item>
        ))}
    </List>
);

export default TasksList;
