// eslint-disable-next-line
import React,{useState} from 'react';

import './Card.css';


function Card({onSubmit}){

    const[title,setTitle] = useState('');
    const[date,setDate] = useState('');
    const[description,setDescription] = useState('');
    const[value,setValue] = useState(0);
    const[category,setCategory] = useState("Lazer");    

     async function insertCard(e){
        e.preventDefault();

       await onSubmit({
           title,
           date,
           description,
           value,
           category
       })

        setTitle('');
        setDate('');
        setDescription('');
        setValue(0);
        setCategory('Lazer')


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
                <select name="category" value = {category} onChange = {e => setCategory(e.target.value)}> 
                    <option value="lazer">Lazer</option>
                    <option value="transporte">Transporte</option>
                    <option value="aprendizado">Aprendizado</option>
                    <option value="alimentação">Alimentação</option>
                </select> 
                <input type="submit" value="Registrar" className="sendB"/>
            </div>
        </form>
        </>
    )
}

export default Card;