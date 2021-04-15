import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useCouter} from '../hooks/useCounter'
import { useForm } from '../hooks/useForm';

export const Contador = ({initialState=10,cambio=1}) => {
    const {counter:state,increment,decrement,reset} = useCouter(initialState)
    const {counter:stated,increment:incrementd,decrement:decrementd,set:setd} = useCouter(cambio)
    const [formValues, handleInputChange] = useForm({
        numero: 0,
    },['numero']);

    const {numero} = formValues;
    useEffect(() => {
        console.log('Numero Cambio');
        if(numero){
            setd(parseInt(numero));
        }
    }, [numero])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    
    return (
        <>
        <div>
            <h1>Contador</h1>
            <h1>{state}</h1>
            <button onClick={() => increment(stated)}>+{stated}</button>
            <button onClick={() => reset()}> Reset </button>
            <button onClick={() => decrement(stated)}>-{stated}</button>
        </div>
        <div>
            <h1>Cambio</h1>
            <h1>{stated}</h1>
            <button onClick={() => incrementd()}>+1</button>
            <form onSubmit={handleSubmit}>
                <input type='number' name='numero' value={numero} onChange={handleInputChange}/>
            </form>
            <button onClick={() => decrementd()}>-1</button>
        </div>
        </>
    );
}

Contador.propTypes = {
    value: PropTypes.number,
}

export default Contador;