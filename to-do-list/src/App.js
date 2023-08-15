
import './App.css';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import ToDoForm from './components/ToDo/ToDoForm';
import ToDoList from './components/ToDo/ToDoList'
import {BrowserRouter, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signup/>} />
          <Route path="/ToDoList" element = {<ToDoList/>} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Signup />
      <ToDoForm />
    </div>
  );
}

export default App;
