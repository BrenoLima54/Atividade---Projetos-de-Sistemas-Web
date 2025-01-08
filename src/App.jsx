import "./App.css";
import React, { useState } from 'react';
import CardAtleta from './components/CardAtleta';
import PainelFavoritos from './components/PainelFavoritos';
import { fetchAthletes } from './services/Api';  // Importação correta da função


function App() {
  const [search, setSearch] = useState('');
  const [atleta, setAtleta] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    const data = await fetchAthletes(search);
    setAtleta(data);
  };

  const addToFavorites = (atleta) => {
    if (!favorites.find((fav) => fav.id === atleta.id)) {
      console.log('Adicionando ao favoritos:', atleta); 
      setFavorites([...favorites, atleta]);
    } else {
      console.log('Atleta já adicionado aos favoritos');
    }
  };

  return (
    <div className="App">
      <h1>Pesquisa de Atletas</h1>
      <input
        type="text"
        placeholder="Nome do atleta"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>

      <div className="atleta-list">
        {atleta && atleta.length > 0 ? (
          atleta.map((atleta) => (
            <CardAtleta key={atleta.id} atleta={atleta} addToFavorites={addToFavorites} />
          ))
        ) : (
          <p>Nenhum atleta encontrado</p>
        )}
      </div>

      <PainelFavoritos favorites={favorites} />
    </div>
  );
}

export default App;
