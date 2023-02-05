import { Box, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <Box>
        <header>
            <Title as="h2">
                {title}
            </Title>
            {extraHeaderContent}
        </header>
        <Body>
            {body}
        </Body>
    </Box>

);

export default Section;