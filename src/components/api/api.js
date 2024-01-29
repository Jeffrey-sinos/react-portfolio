import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './api.css';

const Api = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    // Make an API request when the component mounts
    const fetchChuckNorrisJoke = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        setJoke(response.data.value);
      } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
      }
    };

    fetchChuckNorrisJoke();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2 className="chuck">Chuck Norris Joke:</h2>
      <p className="parag">{joke}</p>
    </div>
  );
};

export default Api;
