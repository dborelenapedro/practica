import React from 'react';

import {Text} from './Language';

import portada from '../assets/portada.png';
export default class Home extends React.Component {
    render() {
        return (
        <div>
            <h1 style={{backgroundColor: 'navy', color: 'white'}}>
                <Text tid="Bienvenido"/>
            </h1>
            <img src={portada} alt="portada"/>
        </div>
          
        );
    }

}