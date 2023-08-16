
import './App.css';
import Header from './components/Header/Header';
import Signup from './components/Signup/Signup';
import ToDoForm from './components/ToDo/ToDoForm';
import ToDo from './components/ToDo/ToDo'
import {BrowserRouter, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signup/>} />
          <Route path="/ToDo" element = {<ToDo/>} />
        </Routes>
      </BrowserRouter>
      {/* <Signup /> */}
      {/* <ToDoForm /> */}
    </div>
  );
}

export default App;
