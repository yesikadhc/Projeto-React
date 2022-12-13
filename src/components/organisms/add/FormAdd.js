import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { helpHttp } from "../../../helpers/helpersHTTP";
import Button from "../../atom/buttoms";
import axios from "axios";
import { Icon } from "@mui/material";

const initialForm = {
    nome:"",
    telefone:"",
    email:""
}

export default function FormAdd () {
    const [form, setForm] = useState(initialForm)
    let navigate = useNavigate()
    const { id } = useParams()
    const [db, setDb] = useState(null)
    let api = helpHttp()
    let url = "http://localhost:3000/contatos/" 
    
    useEffect(() => {
        api.get(url).then((res) => {
            if(!res.err) {
                setDb(res)
            }
        })
    }, [url])

    id ? URL = `http://localhost:3000/contatos/${id}` : URL = "http://localhost:3000/contatos/"
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

    useEffect(() => {
        if(contact) {
            setForm(contact)
        }else{
            setForm(initialForm)
        }
    }, [contact])
    

    const createData = (data) =>{
        let options = {
            body:data,
            headers: {"content-type":"application/json"}
        }
        api.post(url, options).then((res) => {
            console.log(res)
            if(!res.err) {
                setDb([...db, res])
            }
        })
   }

   const updateData = (data) => {
        let endPoint = `${url}/${data.id}`
        console.log(endPoint)

        let options = {
            body:data,
            headers: {"content-type":"application/json"}
        }
        api.put(endPoint, options).then((res) => {
            console.log(res)
            if(!res.err) {
                setDb([...db, res])
            }
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        if(!form.nome || !form.telefone){
            alert("Datos incompletos")
            return
        }

        if(!form.id){
            console.log(form)
            createData(form)
            navigate("/")
        }else{
            updateData(form)
            navigate("/")
        }
        handleReset()
    }

    const handleReset = (e) => {
        setForm(initialForm)
    }
    
    return(
        <div className="formulario-add-edit">
            <div className="header">
                {
                id ? (                    
                        <div>
                            <h1>Editar</h1>
                            <Button 
                                icon="home"
                                onClick={() => {
                                    navigate("/")
                                }} 
                            />
                        </div>
                ) : (
                        <div>
                            <h1>Agregar</h1>
                            <Button 
                                icon="home"
                                onClick={() => {
                                    navigate("/")
                                }}
                            />
                        </div>
                )
                }
            </div>
            <form onSubmit={handleSubmit}>
                <label><Icon>{form.icon='person'}</Icon></label>
                <input 
                    type={"text"}
                    placeholder="Seu nome aqui"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                <br />
                <label><Icon>{form.icon='phone'}</Icon></label>
                <input 
                    type="text" 
                    placeholder="(xx)xxxxxxxxx"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                />
                <br />
                <label><Icon>{form.icon='mail'}</Icon></label>
                <input 
                    type="email" 
                    placeholder="seu@email.com"
                    name="email"
                    value={form.email}
                    onChange={handleChange}

                />
                <br />
                <div className="btn">
                    {
                        id ? (
                            <Button 
                                icon="save"
                                onSubmit={handleSubmit}
                            />
                            ) : (
                                <Button 
                                icon="add"
                                onSubmit={handleSubmit}
                            />
                            ) 
                    }
                    <Button 
                        icon="cancel" 
                        onClick={() => {
                            navigate("/")
                        }}
                    />
                </div>
            </form>
        </div>
    )
}