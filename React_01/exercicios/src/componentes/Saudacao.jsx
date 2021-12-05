import React, { Component} from "react";


export default class Saudacao extends Component{

    //Colocando um estado inicial
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    //Fazendo com que o componente seja atualizado
    setTipo(e){
        this.setState({tipo: e.target.value})
    }
    setNome(e){
        this.setState({nome: e.target.value})
    }

    //render é a funcao responsavel por renderizar o componente
    render(){
        //Usar operador destructing para tirar os 2 atributos de dentro de props
        const {tipo, nome} = this.state;
        //Dentro do return uma expressao com o jsx
        return(
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />        
                {/* 
                    Inputs que vao receber o que vai ser passado para a funcao
                */}        
                <input type="text" placeholder="Tipo..." value={tipo} 
                    //Sempre que ouver uma mudança no campo vai ser chamada a funcao
                    onChange={e => this.setTipo(e)}/>

                <input type="text" placeholder="Nome..." value={nome} 
                    onChange={e => this.setNome(e)}/>
            </div>
        )
    }
}