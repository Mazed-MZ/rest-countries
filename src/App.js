import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all
    `)
      .then(res => res.json())
      .then(data => setCountry(data))
  }, []);

  return (
    <div className="users">
      <h1>My Rest Countries</h1>
      <h3>List of countries: {country.length}</h3>
      <div className='country'>
        {/*
        ---->>>> Option One <<<<----
        {
          country.map(countries => <Countries countriesData={countries}></Countries>)
        } */}
        {/* 
        ---->>>> Option Two <<<<----
        {
          country.map(countries => <Countries name={countries.name} population={countries.population}></Countries>)
        } */}

        {/* ---->>>> Option Three <<<<---- */}
        {
          country.map(countries => <Countries countriesData={countries}></Countries>)
        }
      </div>
    </div>
  );
}

export default App;
