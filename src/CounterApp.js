import React from 'react';
import Contador from './components/Contador';

const CounterApp = ({value}) => {

    return (
        <>
        <Contador value={value} cambio={5}/>
        </>
        
    );
}

export default CounterApp;