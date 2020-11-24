import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import {fetchData} from './api/api';
import coronaImage from './images/image.png'; 

const App = () => {
  const [data, setData] = useState({data:{}, country: ""});
  const getData = async () => {
    const data = await fetchData();
    setData({data:data});
  }
  const handleCountryChange = async (country) => {
   
    const data = await fetchData(country);
    setData({data:data, country: country});
    
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.App}>
      <img className={styles.covid19Img } src={coronaImage} alt="Covid19-Img"/>
      <Cards data={data.data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data.data} country={data.country}/>
    </div>
  );
}

export default App;
