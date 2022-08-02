import { CssBaseline } from "@mui/material"
import QuestionCard from "./QuestionCard"

function App() {
  return (
    <div>
      <CssBaseline />
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
      </div>
  );
}

export default App;
