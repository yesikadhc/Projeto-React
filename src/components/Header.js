import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./atom/buttoms";


export default function Header() {
    let navigate = useNavigate()
    return (
        <div>
            <h1 className="title">Contatos</h1>
            <div className="btn">
                <Button
                    icon="person_add"
                    onClick={() => {
                        navigate("/add")
                    }}
                />
                <Button
                    icon="search"
                    onClick={() => {
                        navigate("/search")
                    }}
                />
            </div>
        </div>
    )
}
