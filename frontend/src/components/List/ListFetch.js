import React,{useState} from 'react';
import apiURL from '../utils/api';

function List() {
    const [costs,setCosts] = useState([]);

    async function getData(){
        const response = await apiURL.get('/card');
        setCosts(response.data);
    }
    getData();

    return costs;
}

export default List;