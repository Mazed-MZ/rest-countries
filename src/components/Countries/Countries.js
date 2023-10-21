import React from 'react'
import './Countries.css';

function Countries(props) {

    const { name, population, region } = props.countriesData;
    return (
        <div className='restcountry'>
            {/*
            ---->>>> Option One <<<<---- 
            <h1>{props.countriesData.name.common}</h1>
            <p>Population: {props.countriesData.population}</p>
            <p>Region: {props.countriesData.region}</p> */}

            {/* 
            ---->>>> Option Two <<<<----
            <h1>{props.name.common}</h1>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p> */}

            {/* ---->>>> Option Three <<<<---- */}
            <h1>{name.common}</h1>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
        </div>
    )
}

export default Countries
