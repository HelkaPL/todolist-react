import "./style.css"

const ExternalsButtons = ({ tasks, hideDone, toggleHideDone}) => {
    return tasks.length > 0 && (
    <div className="externals">
        <button
            onClick={toggleHideDone} 
            className="externals__button"
        >
        {hideDone ? 'Pokaż' : 'Ukryj'} zakończone
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