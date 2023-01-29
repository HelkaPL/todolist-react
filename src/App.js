import { useState } from 'react';
import Container from "./Container"
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import ExternalsButtons from "./ExternalsButtons";
import TasksList from "./TasksList";


function App() {
  const [hideDone, setHideDone] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      content: 'Pierwsze zadanie, wciaz niewykonane',
      done: false,
    },
    {
      id: 2,
      content: 'Drugie zadanie, już wykonane',
      done: true,
    },
  ])

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList tasks={tasks} hideDone={hideDone} removeTask={removeTask} />}
        extraHeaderContent={<ExternalsButtons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
