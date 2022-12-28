import React, { useEffect, useState } from 'react';
import './item-list.css';
import SwapiService from './../../services/swapi-service';

const ItemList = () => {
  const [state, setState] = useState({data: []})
  const swapi = new SwapiService()
  const [idshka, setIdshka] = useState({id: 1})

  useEffect(() => {
    swapi.getAllPeople()
    .then(data => {
      setState({data: data})
      data.map((item) => {
        setIdshka(item)
      })
      console.log(idshka)
    })
  }, [])

  const content = state.data.map(item => (
      <li className="list-group-item">{item.name}</li> 
  ))

  return(
  <ul className="item-list list-group">
    {content}
  </ul>
  )
}

export default ItemList    

  



  