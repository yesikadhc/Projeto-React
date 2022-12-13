import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { NomeContato } from "./atom/buttoms/datos,js";

export default function Body() {
  const [todos, setTodos] = useState([])
  const URL = 'http://localhost:3000/contatos/'

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(URL)
      setTodos(response.data)
    }
    getData()
  }, []);

  if (!todos) {
    return <>'Carrregando....'</>
  } else {
    let listaContact = []
    return (
      listaContact = todos.map((todo) => {
        if (!todo) {
          return null
        }
        return (
          <div className="lista">
            <Link to={`/contato/${todo.id}`}>
              <div className="card-list" key={todo.id}>
                <NomeContato nome={todo.nome} />
              </div>
            </Link>
          </div>
        )
      })
    )
  }


} 
