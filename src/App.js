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
let hideDone = false; // in default show all tasks
function App() {
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
         extraHeaderContent={<ExternalsButtons tasks={tasks} hideDone={hideDone}/>}
        />
    </Container>
  );
}

export default App;
