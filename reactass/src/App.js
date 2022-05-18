import logo from './logo.svg';
import './App.css';
import Main from "./RCT-101.A1 - React Intro /REACT MOBILE OS/Main"
import Navbar from './RCT-101.A1 - React Intro /REACT NAVBAR/navbar';
import Counter from './RCT-101.A2 State, Props And Conditional Rendering/COUNTER/Counter';
import { TodoList } from './RCT-101.A2 State, Props And Conditional Rendering/REACT SIMPLE TODO/Todolist';
import { CartDetails } from './RCT-101.A3 Listing Keys and Conditional Rendering /REACT - PAYMENT CARD/cartdetails';

function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <Navbar/> */}
      {/* <Counter/> */}
      {/* <TodoList/> */}
      <CartDetails/>
    </div>
  );
}

export default App;
