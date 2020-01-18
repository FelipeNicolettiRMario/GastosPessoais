import React from 'react';
import './Card.css';

function Card(){
    return (
        <>
        <form>
            <div className="submitCard">
                <h1 className="card-title">Preencha um gasto</h1>
                <label>Titulo do gasto</label>
                <input type="text" name="title" id=""/>
                <br/>
                <label>Data do gasto</label>
                <input type="date" name="date" id=""/>
                <br/>
                <label>Descrição do gasto</label>
                <br/>
                <textarea name="description" id="" cols="30" rows="10"></textarea>
                <br/>
                <label>Valor do gasto</label>
                <input type="number" name="value" />
                <br/>
                <input type="submit" value="Registrar" className="sendB"/>
            </div>
        </form>
        </>
    )
}

export default Card;