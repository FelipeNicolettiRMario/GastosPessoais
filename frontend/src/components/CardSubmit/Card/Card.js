// eslint-disable-next-line
import React,{useState} from 'react';
import apiURL from '../../utils/api'

import './Card.css';


function Card(){

    const[title,setTitle] = useState('');
    const[date,setDate] = useState('');
    const[description,setDescription] = useState('');
    const[value,setValue] = useState(0);

     async function insertCard(e){
        e.preventDefault();

       const insertObject = {
           title,
           date,
           description,
           value
       }
        
       const response = await apiURL.post('/card',insertObject);

        setTitle('');
        setDate('');
        setDescription('');
        setValue(0);

        return response;

        }
    return (
        <>
        <form onSubmit={insertCard}>
            <div className="submitCard">
                <h1 className="card-title">Preencha um gasto</h1>
                <label>Titulo do gasto</label>
                <input type="text" name="title" id="" value = {title} onChange={e => setTitle(e.target.value)}/>
                <br/>
                <label>Data do gasto</label>
                <input type="date" name="date" id="" value={date} onChange={e => setDate(e.target.value)}/>
                <br/>
                <label>Descrição do gasto</label>
                <br/>
                <textarea name="description" id="" cols="30" rows="10" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                <br/>
                <label>Valor do gasto</label>
                <input type="number" name="value" value = {value} onChange={e => setValue(e.target.value)}/>
                <br/>
                <input type="submit" value="Registrar" className="sendB"/>
            </div>
        </form>
        </>
    )
}

export default Card;