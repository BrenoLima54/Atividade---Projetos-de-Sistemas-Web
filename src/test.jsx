import { useEffect } from 'react';
import { fetchAthletes } from './services/Api';

useEffect(() => {
  fetchAthletes('1').then(data => console.log(data));
}, []);
