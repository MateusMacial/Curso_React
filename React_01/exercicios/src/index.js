import React from 'react'
import ReactDOM from 'react-dom'

//Importando, o nome deve estar em camelCase
//import Primeiro from './componentes/Primeiro'

//import BomDia from './componentes/BomDia'

//Importando dois componentes
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'

//import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'

//Por mais que paresa html é javascrip(JSX), más só vai se mostrar javascrip quando ouver o transpire(conversão) do codigo.
//const elemento = <h1>React</h1>

//O react é o core da aplicação.
//O reactDOM é o responsavel por conversar com a DOM.
//O elemento no qual a aplicação vai estar dentro é o 'root', sendo assim deve-se buscar ele.
//Pode-se passar varior parametros para o metodo receber.
//Usando dois componentes

/* ReactDOM.render(
    <div>
        <BoaTarde nome = 'Mateus'/>
        <BoaNoite nome = 'Mario'/>
    </div>,
    document.getElementById('root')
) */

ReactDOM.render(
    <div>
        <Pai nome="Mateus" sobrenome="Silva"/>
    </div>,
    document.getElementById('root')
)