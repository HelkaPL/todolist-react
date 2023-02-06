import Container from "./common/Container"
import Header from "./common/Header";
import Section from "./common/Section";
import Form from "./features/tasks/Form";
import ExternalsButtons from "./features/tasks/ExternalsButtons";
import TasksList from "./features/tasks/TasksList";
import ButtonFetch from "./common/Buttons";

function App() {

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ButtonFetch />}
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<ExternalsButtons />}
        body={<TasksList />}
      />
    </Container>
  );
}

export default App;
