import Container from "./common/Container"
import Header from "./common/Header";
import Section from "./common/Section";
import Form from "./features/tasks/Form";
import ExternalsButtons from "./features/tasks/ExternalsButtons";
import TasksList from "./features/tasks/TasksList";

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
        body={<TasksList />}
        extraHeaderContent={<ExternalsButtons />}
      />
    </Container>
  );
}

export default App;
