import React from "react";

export function NomeContato(props) {
    return (
        <>
            <p className="content-nome">{props.nome}</p>
        </>
    )
}

export function TelefoneContato(props) {
    return (
        <>
            <p className="content-phonr">{props.telefone}</p>
        </>
    )
}

export function EmailContato(props) {
    return (
        <>
            <p className="content-email">{props.email}</p>
        </>
    )
}