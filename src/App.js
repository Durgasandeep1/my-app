import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="header">Header</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; 
      <Link to="todo">Todolist</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; 
      <Link to="counter">Counter</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; 
      <Link to="countries">Country</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
