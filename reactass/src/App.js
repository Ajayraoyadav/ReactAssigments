import logo from './logo.svg';
import './App.css';
import Main from "./RCT-101.A1 - React Intro /REACT MOBILE OS/Main"
import Navbar from './RCT-101.A1 - React Intro /REACT NAVBAR/navbar';
import Counter from './RCT-101.A2 State, Props And Conditional Rendering/COUNTER/Counter';
import { TodoList } from './RCT-101.A2 State, Props And Conditional Rendering/REACT SIMPLE TODO/Todolist';

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <Navbar/> */}
      {/* <Counter/> */}
      <TodoList/>
      
    </div>
  );
}

export default App;
