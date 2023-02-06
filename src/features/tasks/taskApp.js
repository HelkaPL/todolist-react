import Container from "../../common/Container"
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import ExternalsButtons from "./ExternalsButtons";
import TasksList from "./TasksList";
import ButtonFetch from "../../common/Buttons";

function TaskApp() {

  return (
    <Container>
      <Header title="Lista zadań" />
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

export default TaskApp;
