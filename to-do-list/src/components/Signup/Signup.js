import React, {useState} from 'react';
import './Signup.css'
import { useNavigate, Link } from 'react-router-dom';


function Signup() {
    // const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        setUsername(event.target.value);
        setEmail(event.target.value);
        setPassword(event.target.value);
        event.preventDefault();
        if (username === '' || email === '' || password === '') {
            alert("All Fields Must Be Entered")
        }
    }
  return (
    <div className='signupForm'>
       <h3> Complete Registration</h3>
        <form>
            <label>
                Create Username: <input type="textarea" />
            </label>
            <label>
                Input Email Address: <input type='textarea' />
            </label>
            <label>
                Create Password: <input type='textarea' />
            </label>
            <button onClick={handleSubmit}>
            <Link to={'/ToDo'}>Sign Up</Link>
            </button>
        </form>
    </div>
  )
}

export default Signup
