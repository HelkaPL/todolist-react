import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Jakub Helizanowicz"
            body={
                <>
                <p>Jak już wyżej da się zauważyć nazywam się <b>Jakub Helizanowicz</b>.<br/> <strong>Jestem wielkim fanem
                    kotletów schabowych!</strong> i generalnie <em>smacznego jedzonka</em>.<br/> Można zapewne się
                domyśleć że lubie również: <i>Sushi</i> i <i>FastFood</i>.</p>
                </>
            } 
        />
    </Container>
);