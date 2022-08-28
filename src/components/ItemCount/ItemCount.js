import * as React from 'react';
import Button from '@mui/material/Button';
import './ItemCount.scss';
import { useState } from 'react';

const ItemCount = () => {

    const [counter, setCounter] = useState(0)

    const handlesumar = () => {
        setCounter(counter + 1)
    }

    const handlerestar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className='item-count-container'>
            <h2>Contador</h2>
            <Button variant="contained" onClick={handlerestar}> - </Button>
            <span className='count-number'>{counter}</span>
            <Button variant="contained" onClick={handlesumar}> + </Button>
        </div>
    )
}

export default ItemCount
