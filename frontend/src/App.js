import React,{useEffect,useState} from 'react';
import Card from './components/CardSubmit/Card/Card';
import ListRender from './components/List/ListRender';
import Chart from './components/Chart/Chart';
import apiURL from './utils/api';

import './Main.css'

function App() {
  const [costs,setCosts] = useState([]);
  const [data,setData] = useState([])


  useEffect(()=>{
      async function getData(){
          const response = await apiURL.get('/card');
          setCosts(response.data);
      }
      getData();

  },[])

  useEffect(()=>{

      async function getData() {
  

          const response = await apiURL.get('/chart');
  
          setData(response.data);

      }
      getData()
  },[costs])

  async function handleSubmit(data) {
    const response = await apiURL.post('/card',data);
    setCosts([...costs,response.data]);
 
  }

  return (
    <>

    <div className="listContainer">
 
    <Card  onSubmit={handleSubmit}/>

      <ul>
      {costs.map(item => (<ListRender item = {item}/>))}
      </ul>
      </div>
      <Chart data = {data}/>

    </>
  );
}

export default App;
