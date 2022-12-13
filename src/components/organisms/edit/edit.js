import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../atom/buttoms";
import { useNavigate, useParams } from "react-router-dom"
import FormAdd from "../add/FormAdd";

let initialForm = {
    id:"",
    nome:"",
    telefone:"",
    email:""
}

export default function EditContact() {
   const {id} = useParams()
   const URL = `http://localhost:3000/contatos/${id}`

   
   const [contact, setContac] = useState([]);
   useEffect(() => {
    const getData = async () => {
      const response = await axios.get(URL);
      const contacto = response.data
      console.log("data: "+ {contacto})
      setContac(contacto);
    };
    getData();
  }, [id]);

    let navigate = useNavigate()
    console.log(contact?.nome)  

    return(
        <div>
            <h1>Edit Contact</h1>
            <Button 
                icon="home"
                onClick={() => {
                    navigate("/")
                }}
            />
            <FormAdd 
            />
            <div>
                <p>key= {contact?.id}</p>
                <p>nome = {contact?.nome}</p>
                <p>phone = {contact?.telefone}</p>
                <p>email = {contact?.email}</p>
            </div>
        </div>
    )
}