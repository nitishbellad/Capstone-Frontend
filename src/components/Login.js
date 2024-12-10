// import React, { useState } from 'react';
// import { loginUser } from '../services/apiService'; // Ensure this function is defined
// import { useAuth } from '../contexts/AuthContext'; // Import the context
// import { useNavigate } from 'react-router-dom';
// import './Login.css';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useAuth(); // Use the context

//   const handleLogin = (e) => {
//     e.preventDefault();
//     loginUser({ email, password })
//       .then((response) => {
//         if (response.status === 200) {
//           login(response.data); // Use login from context
//           navigate('/home'); // Redirect to home page
//         } else {
//           setError('Invalid credentials'); // Display error message
//         }
//       })
//       .catch((error) => {
//         console.error('Error logging in:', error);
//         setError('An error occurred'); // Display error message
//       });
//   };

//   const handleRegisterRedirect = () => {
//     navigate('/register');
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//         {error && <p>{error}</p>}
//       </form>
//       <p>
//         New here? <button onClick={handleRegisterRedirect}>Register</button>
//       </p>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { loginUser } from '../services/apiService'; // Ensure this function is defined
import { useAuth } from '../contexts/AuthContext'; // Import the context
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the context

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ email, password })
      .then((response) => {
        if (response.status === 200) {
          login(response.data); // Use login from context
          navigate('/home'); // Redirect to home page
        } else {
          setError('Invalid credentials'); // Display error message
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setError('An error occurred'); // Display error message
      });
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <p>
          New here? <button className="register-button" onClick={handleRegisterRedirect}>Register</button>
        </p>
      </div>
    </div>
  );
}

export default Login;

