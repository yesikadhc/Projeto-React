import React, { useEffect, useState } from "react";
import Button from "../../atom/buttoms";
import { helpHttp } from "../../../helpers/helpersHTTP";
import {useParams, useNavigate} from "react-router-dom"
import { EmailContato, NomeContato, TelefoneContato } from "../../atom/buttoms/datos,js";



export default function CardEdit(){
const {id} = useParams()
const [contacto, setContacto] = useState([])
const [db, setDb] = useState([])
let api = helpHttp()
let url = `http://localhost:3000/contatos/${id}`
let navigate = useNavigate()

useEffect(() =>{
    api.get(url).then((res) =>{
        console.log(res)
        setContacto(res)
    })
}, [])

const deleteData  =(id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    )
    if(isDelete){
      let endPoint = `${url}`
      let options = {
        headers: {"content-type":"application/json"}
      }
      api.del(endPoint,options).then(res=>{
        if(!res.err){
          let newData = db.filter((el)=> el.id !== id)
          setDb(newData)
          navigate("/")
        }
      })
    }
  }

    return(
         <div className="card-t">
         <div>
            <Button 
                icon="home"
                onClick={() => {
                    navigate("/")
                }}
            />
         </div>
         <div className="card-contact" key = {contacto.id}>
            <NomeContato nome={contacto.nome} />
            <TelefoneContato telefone={contacto.telefone} />
            <EmailContato email={contacto.email} />
            <div className="btn">
            <Button 
                icon="edit" 
                onClick={() => {
                    navigate(`/edit/${contacto.id}`)
                  }}
            />
            <Button 
                icon="delete"
                onClick={() => deleteData(`${contacto.id}`)}
            />
            </div>
         </div>
        </div>
    )
}