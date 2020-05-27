import React, {useState, useEffect} from "react";

import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepository(response.data);
    });
  }, [])

  async function handleAddRepository() {
    console.log('Adicionar');
  }

  async function handleRemoveRepository(id) {
    api.delete(`repositories/${id}`).then(response => response.status);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => 
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remove
            </button>
          </li>
        )}
      </ul>

      <button onClick={handleAddRepository}>Add</button>
    </div>
  );
}

export default App;
