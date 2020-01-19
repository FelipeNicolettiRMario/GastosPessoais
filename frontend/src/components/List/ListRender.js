import React from 'react';
import './List.css';

function ListRender({item}){
    return (
        <li>
            <div className="container-result">
            <h4 className="title"><b>{item.title}</b></h4>
            <p className="description-content"><b>Descrição:</b>{item.description}</p>
            <p className="value-content"><b>Valor:</b>R${item.value}</p>
            </div>
        </li>
    )
    
}

export default ListRender;