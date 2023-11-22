import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Fetch.css';



export default function MiJSON() {
  const [users, setUsers] = useState([]);
  const urlJson = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    const fetchData = async () => {
      const users_data = await axios(urlJson);
      setUsers(users_data);
    };
    fetchData();
  }, [setUsers])

  console.log(users)

  return (
    <div>
      <h1>Fetch Usuarios</h1>

      {(users.length !== 0)
        ?
        users.data.map(item => (

          <div class="card">
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>

          </div>

        ))

        : <h1>Espera un momento...</h1>
      }
    </div>
  )
}