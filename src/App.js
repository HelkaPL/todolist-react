import { useTasks } from "./useTasks";
import Container from "./common/Container"
import Header from "./common/Header";
import Section from "./common/Section";
import Form from "./features/tasks/Form";
import ExternalsButtons from "./features/tasks/ExternalsButtons";
import TasksList from "./features/tasks/TasksList";

function App() {

  const {
    hideDone,
    toggleHideDone,
    tasks,
    removeTask,
    toggleTaskDone,
    setAllTaskDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<ExternalsButtons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllTaskDone={setAllTaskDone} />}
      />
    </Container>
  );
}

export default App;
