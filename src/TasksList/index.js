import "./style.css";

const TasksList = ( props ) => (
    <ul className="section__content">
        {props.tasks.map(task => (
            <li
                key={task.id}
                className={`taskList${task.done && props.hideDone ? ' taskList--hidden' : ''}
                `}>
            <input
                type="button" 
                className="taskList__button taskList__button--add"
                value={`${task.done ? '✔' : ''}`}
                />
            <span 
                className={`taskList__taskText${task.done ? ' taskList__taskText--done' : ''}`}>
                {task.content}</span>
            <input
                type="button"
                className="taskList__button taskList__button--remove"
                value="&#128465;"
            />
            </li>

        ))}
    </ul>
)

export default TasksList;
