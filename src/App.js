import "./App.css";
import ExerciseStore from "./components/ExerciseStore/ExerciseStore";
import Header from "./components/Header/Header";
import QuestionAnswer from "./components/QuestionAnswer/QuestionAnswer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ExerciseStore></ExerciseStore>
      <QuestionAnswer></QuestionAnswer>
    </div>
  );
}

export default App;
