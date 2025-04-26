import React, { useEffect, useState } from 'react';

import './TimeDetails.scss';

import { dayOfWeek, greeting, shortDate } from '../../utils/utils';

const TimeDetails = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('/quotes.json')
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
        setQuote(randomQuote.text);
        setAuthor(randomQuote.name);
      })
      .catch((error) => {
        console.error('Erro ao carregar citações:', error);
      });
  }, []);

  return (
    <div className='time-details__wrapper'>
      <span className='time-details' id='time-details__greeting'>
        {greeting()}
      </span>
      <span className='time-details' id='time-details__date'>
        It's {dayOfWeek()} {shortDate}
      </span>
      <span className='time-details' id='time-details__anecdote'>
        "{quote}"
      </span>
      <span className='time-details' id='time-details__author'>
        - {author}
      </span>
    </div>
  );
};

export default TimeDetails;
