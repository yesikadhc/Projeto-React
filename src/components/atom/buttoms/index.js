import { Icon } from "@mui/material";
import React from "react";
import "./index.css"

export default function Button(props) {
    return(
        <button onClick={props.onClick} type={props.type} className="buttom" >
            <Icon>{props.icon}</Icon>
        </button>
    )
}