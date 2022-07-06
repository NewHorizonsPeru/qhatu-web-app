import React, { useState } from 'react';
import HomeStl from './HomeStl';

const Home = () => {
  const [characters, setCharacters] = useState({
    loading: true,
    data: undefined,
    prev: null,
    next: null,
  });

  return <HomeStl characters={characters} />;
};

export default Home;
