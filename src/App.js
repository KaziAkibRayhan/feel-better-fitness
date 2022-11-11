import "./App.css";
import ExerciseStore from "./components/ExerciseStore/ExerciseStore";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ExerciseStore></ExerciseStore>
    </div>
  );
}

export default App;
