/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Filho from "./Filho";

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h1>Filhos</h1>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>
            <Filho {...props} nome="Maria"/>
        </ul>
    </div>