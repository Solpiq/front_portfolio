import React, { useState, useEffect } from 'react';
import './ExperienciaStyles.css'

const ExpLaboral=() =>{
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const fetchRandomUsers = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/exp_laborals');
          const data = await response.json();
          setUsers(data['hydra:member']);
        } catch (error) {
          console.log('Error al obtener los datos de usuarios aleatorios:', error);
        }
      };
  
      fetchRandomUsers();
    }, [3]);
  return (
  <div className="card" >
    <h1>Experiencia Laboral</h1>
  {users.map(item => (
    
    <p>{item.N_empresa} {item.puesto} {item.Descripción}  </p>
    
  ))}
  
  
  </div>
  )
}

export default ExpLaboral

