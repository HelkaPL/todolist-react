import {useState} from 'react';
import Container from "./Container"
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import ExternalsButtons from "./ExternalsButtons";
import TasksList from "./TasksList";

let tasks = [
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
]

function App() {
  const [hideDone, setHideDone] = useState(false)

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
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
         body={<TasksList tasks={tasks} hideDone={hideDone} />}
         extraHeaderContent={<ExternalsButtons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}/>}
        />
    </Container>
  );
}

export default App;
