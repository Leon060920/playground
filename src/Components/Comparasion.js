import React, { useState, useEffect } from 'react';
import './Comparasion.css';



const Comparasion = () => {

  const [userData, setUserData] = useState(null);
  const [inputName, setInputName] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [thumbStatus, setThumbStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    
    fetchData();
  }, []);

  const handleCheck = () => {
    if (userData) {
      const matchingUser = userData.find(
        (user) => user.name === inputName && user.username === inputUsername
      );

      setThumbStatus(matchingUser ? '👍' : '👎');
    }
  };

  return (
    <div>
      <h2>Comparador</h2>
      
        Name:
        <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} />
        
      
      
        Username:
        <input type="text" value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} 
         onKeyPress={event => {
          if (event.key === 'Enter') {
            handleCheck()
          }
        }}
        
        />
      
      <button onClick={handleCheck}>Consultar</button>
      {thumbStatus && <div>Consulta: {thumbStatus}</div>}
    </div>
  );
};

export default Comparasion;
