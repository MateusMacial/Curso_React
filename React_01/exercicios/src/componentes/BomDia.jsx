/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

//O nome que vai receber o parametro pode ser qualquer coisa, más por padrão usa-se 'props', props seriao as propriedades passadas para esse componente.
//Uma maneira de colocar duas tags no mesmo componente é envelopar eles com uma div.
//Usando div vai gerar uma div no HTML da pagina para isso n acontecer é só usar React.Fragment
/* export default props => 
    <div>
        <h1>Bom dia {props.nome} !</h1>
        <h2>Até breve!!!</h2>
    </div> */

//Outra maneira é colocar os elementos dentro de um array
//Cada elemento deve ter uma key para o react encontrar mais facil o componente que ele deve mudar, fica mais performatico.
export default props => 
    [
        <h1 key='h1'>Bom dia {props.nome} !</h1>,
        <h2 key='h2'>Até breve!!!</h2>
    ]