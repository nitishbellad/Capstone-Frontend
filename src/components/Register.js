// src/components/Register.js

import React, { useState } from 'react';
import { registerUser } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser({ user_name, email, password, number, dob, gender })
      .then(() => {
        navigate('/login');
      })
      .catch((error) => console.error('Error registering user:', error));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={user_name}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
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
        <input
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

// import React, { useState } from 'react';
// import { registerUser } from '../services/apiService';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';  // Import the CSS file

// function Register() {
//   const [user_name, setUserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [number, setNumber] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     registerUser({ user_name, email, password, number, dob, gender })
//       .then(() => {
//         navigate('/login');
//       })
//       .catch((error) => console.error('Error registering user:', error));
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2 className="heading">Register</h2>
//         <form onSubmit={handleRegister}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={user_name}
//             onChange={(e) => setUserName(e.target.value)}
//             className="input"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             className="input"
//             required
//           />
//           <input
//             type="date"
//             placeholder="Date of Birth"
//             value={dob}
//             onChange={(e) => setDob(e.target.value)}
//             className="input"
//             required
//           />
//           <select
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             className="input"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <button type="submit" className="button">Register</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
