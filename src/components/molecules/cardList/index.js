import React from "react";
import { EmailContato, NomeContato, TelefoneContato } from "../../atom/buttoms/datos,js";

export default function CardList (props){
    return(
        <>
         <div className="m">
            <NomeContato nome = {props.nome} />
            <TelefoneContato telefone = {props.phone} />
            <EmailContato email = {props.email} />
         </div>
        </>
    )
}