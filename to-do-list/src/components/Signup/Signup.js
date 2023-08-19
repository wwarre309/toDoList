import React, {useState} from 'react';
import './Signup.css'
import { useNavigate, Link } from 'react-router-dom';


function Signup() {
    // const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInput = (event) => {
        event.preventDefault();
        const {id, value} = event.target;
        if (id === 'email') {
            setEmail(value);
        }
        if (id === 'username') {
            setUsername(value);
        }
        if (id === 'password') {
            setPassword(value)
        }
    }

    const handleSubmit = () => {
        console.log(username, email, password);
        // navigate('/ToDoList')
    }


  return (
    <div className='signupForm'>
       <h3> Complete Registration</h3>
        <form>
            <label>
                Input Email Address: 
                <input 
                required 
                type='textarea' 
                value ={email} 
                onChange={(e) => handleInput(e)} 
                id='email'/>
            </label>
            <label>
                Create username 
                <input 
                required 
                type='textarea' 
                value={username} 
                onChange={(e) => handleInput(e)} 
                id='username'/>
            </label>
            <label>
                Create Password: 
                <input 
                required 
                type='textarea' 
                value={password} 
                onChange={(e) => handleInput(e)} 
                id='password'/>
            </label>
            <button onClick={handleSubmit}>
            <Link to={'/ToDoList'}>Sign Up</Link>
            </button>
        </form>
    </div>
  )
}

export default Signup
