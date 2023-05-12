import { React, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css'
import countriesData from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div>

      <Navbar />

      <CountriesList countries={countriesData}  />
      <div>
        <Routes>
        <Route path="/countries/:code" element={<CountryDetails countries={countries} />} />
        </Routes>
      </div>
      

      <CountryDetails />
    </div>
    


);
}
export default App
