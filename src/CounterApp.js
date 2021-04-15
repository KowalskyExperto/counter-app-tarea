import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useCouter} from './hooks/useCounter'
import { useForm } from './hooks/useForm';

export const CounterApp = ({initialState=10,cambio=1}) => {
    const {counter:state,increment,decrement,reset} = useCouter(initialState)
    const [formValues, handleInputChange] = useForm({
        numero: 1,
    },['numero']);

    const {numero} = formValues;

    useEffect(() => {
        console.log('Numero Cambio');
    }, [numero])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
        <div>
            <h1>Contador</h1>
            <h1>{state}</h1>
            <button onClick={() => increment((numero) ? parseInt(numero):0)}>+{numero}</button>
            <button onClick={() => reset()}> Reset </button>
            <button onClick={() => decrement((numero) ? parseInt(numero):0)}>-{numero}</button>
        </div>
        <div>
            <h1>Cambio</h1>
            <h1>{(numero) ? numero:'Escriba algún numero'}</h1>
            <form onSubmit={handleSubmit}>
                <input type='number' name='numero' value={numero} onChange={handleInputChange}/>
            </form>
        </div>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;