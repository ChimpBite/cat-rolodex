import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/CardList';
import axios from 'axios';
import { Container, TextField } from '@material-ui/core';

function App() {
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function WaitForMe() {
      try {
        await axios
          .get('https://api.thecatapi.com/v1/categories')
          .then(response => setCats(response.data));
      } catch (err) {
        console.log(err);
      }
    }
    WaitForMe();
  }, []);

  const filteredCats = cats.filter(cat =>
    cat.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Container maxWidth='md'>
      <TextField
        id='search'
        label='search'
        variant='outlined'
        onChange={e => setSearch(e.target.value)}
      />
      <CardList cats={filteredCats} />
    </Container>
  );
}

export default App;
