import React from 'react';

import App from '../iweb_tictactoe_2021-step7/src/components/App.js'

export default class TicTacToe extends React.Component {
    render() {
        return (
        <div>
            <h1 style={{backgroundColor: 'navy', color: 'white'}}>
                TICTACTOE
            </h1>

            <App/>
            
        </div>
          
        );
    }

}