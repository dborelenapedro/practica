import React from 'react';

import {Text} from '../components/Language';

import malo from '../assets/malo.png';
import bueno from '../assets/bueno.png';
export default class Terminado extends React.Component {
    constructor(props){
        super(props);
        this.foto = this.foto.bind(this);
    }

    foto(){
    if(this.props.score === 0){
            return <img src={malo} alt="malo"/>
        }else{
            return <img src={bueno} alt="bueno"/>
        }

    }
    render() {
        return (
        <div>
            <h1 style={{backgroundColor: 'red'}}>
                <Text tid="Terminado"/>
            </h1>

            <h2>Resultado:{this.props.score}</h2>

            {this.foto()}
        </div>
          
        );
    }

}