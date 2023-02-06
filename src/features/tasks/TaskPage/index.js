import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/Container"
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../taskSlice";


function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    console.log(task);
    
    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie ma takiego zadania."}
                body={
                    <><strong>Ukończono:</strong> {task.done ? "Tak": "Nie"}</>
                }
            />
        </Container>
    );
}

export default TaskPage;
