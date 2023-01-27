import "./style.css"

const ExternalsButtons = ({ tasks, hideDoneTasks}) => {
    return tasks.length > 0 && (
    <div className="externals">
        <button 
            className="externals__button"
        >
        {hideDoneTasks ? 'Pokaż' : 'Ukryj'} zakończone
        </button>
        <button 
            className={`externals__button${tasks.every(({ done }) => done) ? '--disabled' : ''}`}
            disabled={tasks.every(({ done }) => done)}
        >
        Ukończ wszystkie
        </button>
    </div>
    )
    }
export default ExternalsButtons;