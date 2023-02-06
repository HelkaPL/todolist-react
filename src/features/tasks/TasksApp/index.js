import Container from "../../../common/Container"
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import ButtonFetch from "../../../common/Buttons";
import Form from "./Form";
import Search from "./Search";
import ExternalsButtons from "./ExternalsButtons";
import TasksList from "./TasksList";

function TasksApp() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ButtonFetch />}
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<ExternalsButtons />}
        body={<TasksList />}
      />
    </Container>
  );
}

export default TasksApp;
