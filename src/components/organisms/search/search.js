import React, { useEffect, useState } from "react";
import Button from "../../atom/buttoms";
import { useNavigate } from "react-router-dom"
import { helpHttp } from "../../../helpers/helpersHTTP";
import { NomeContato } from "../../atom/buttoms/datos,js";



export default function SearchContact() {
    const [usuarios, setUsuarios] = useState([]) // datos dinamicos
    const [tablaUsuarios, setTablaUsuarios] = useState([]) // datos estaticos
    const [busqueda, setBusqueda] = useState("") // busqueda
    let navigate = useNavigate()
    let api = helpHttp()
    let url = "http://localhost:3000/contatos/"
    useEffect(() => {
        api.get(url).then((res) => {
            if (!res.err) {
                console.log(res)
                setUsuarios(res)
                setTablaUsuarios(res)
            }
        })
    }, [])

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
        console.log(e.target.value)
    }

    const filtrar = (termoBusca) => {
        var resulBusca = tablaUsuarios.filter((elemento) => {
            if (elemento.nome.toString().toLowerCase().includes(termoBusca.toLowerCase())) {
                return elemento
            }
        })
        setUsuarios(resulBusca)
    }

    return (
        <div>
            <div className="div-btn-home-pesquisa">
                <Button
                    icon="home"
                    onClick={() => {
                        navigate("/")
                    }}
                />
            </div>
            <div className="input-busca">
                <input
                    type={"text"}
                    value={busqueda}
                    placeholder="Pesquisar"
                    onChange={handleChange}
                />
            </div>
            <div>
                {usuarios && usuarios.map((usuario) => (
                    <div className="div-busca"
                        onClick={() => {
                            navigate(`/contato/${usuario.id}`)
                        }}
                    >
                        <div key={usuario.id} className="card-list-busca">
                            <NomeContato nome={usuario.nome} />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}