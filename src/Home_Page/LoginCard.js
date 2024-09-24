import loginimag from '../Admin/asset/bg-01.jpg';
import './LoginCard.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginCard() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');  // Reset error state
    try {
      // Check for specific login conditions
      if (name === 'admin' && password === 'admin') {
        navigate('/Admin_main'); // Redirect to Admin_main page
      } else if (name === 'instructor' && password === 'instructor') {
        navigate('/Instructor');
      } else if (name === 'student' && password === 'student') {
        navigate('/Student');
      } else if (name === 'head' && password === 'head') {
        navigate('/Dep');
      } else {
        setError('Invalid User Name or Password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request.');
    }
  };

  const handleReset = () => {
    setName('');
    setPassword('');
    setError('');
  };

  return (
    <div className="login-card">
      <div>
        <img className="card-image" src={loginimag} alt="Login card" />
      </div>
      <h2 className="card-title">LOGIN PAGE</h2>
      <form onSubmit={handleLogin}>
        <div className="login-input">
          <label>
            User Name :
            <input 
              value={name} 
              onChange={e => setName(e.target.value)} 
              placeholder="Enter Your Name" 
            />
          </label>
          <br />
          <label>
            Password :
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Enter Your Password" 
            />
          </label>
          <br />
          {error && <div className="error">{error}</div>}
          <button type="submit">Login</button>
          <button type="button" onClick={handleReset}>RESET</button>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
