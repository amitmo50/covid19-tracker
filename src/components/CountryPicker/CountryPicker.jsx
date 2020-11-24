import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchContried} from '../../api/api';

const CountryPicker = ({handleCountryChange}) => {
    const [contries, setCountries] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            const data = await fetchContried();
            setCountries(data)
        }
        getData();
    }, [setCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => {handleCountryChange(e.target.value)}}>
                <option value="global">Global</option>
                {contries.map((country) => <option key={country.name} value={country.name}>{country.name}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;