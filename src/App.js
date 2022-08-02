import { CssBaseline, Box, Container } from "@mui/material"
import QuestionCard from "./QuestionCard"
import { lightGreen } from "@mui/material/colors"

function App() {
  return (
    <div>
      <CssBaseline />
      <Box sx={{
        background: lightGreen[200],
        height: "100vh", display: "flex", 
        alignItems: "center"
      }}>
        <Container maxWidth="sm">
      <QuestionCard question={{
        title: "Sample Question",
        options: [
          {
            description: "Answer 1"
           },
           {
            description: "Answer 2"
           } 
        ]
      }} questionNumber={1} />
        </Container>
      </Box>

      </div>
  );
}

export default App;
