import { render } from '@testing-library/react';
import React from 'react';
import interrogacion from '../assets/interrogacion.png';
import {Text} from '../components/Language'

export default class Game extends React.Component{

    constructor(props){
        super(props);
        this.user = this.user.bind(this);
        this.fotoQuestion = this.fotoQuestion.bind(this);
        this.fotoUser = this.fotoUser.bind(this);
    }

    user(){
        if(this.props.quiz.author !== null){ // hay gente que ha puesto el campo author = null
            if(this.props.quiz.author.profileName !== null){ // hay gente que tiene campo author peor no profileName
                return <h2>{this.props.quiz.author.profileName}</h2>;
            }else{
                return <h2>Anonimo</h2>;
            }
        }else{
            console.log("user null");
            return <h2>Anonimo</h2>;
        }

        }
    fotoUser(){
            if(this.props.quiz.author !== null){
                return <img src={this.props.quiz.author.photo.url} alt="img author" style={{width: 50, display: 'inline'}}/>;
            }else{
                console.log("fotoUser");
                return <img src={interrogacion} alt="img author" style={{width: 50, display: 'inline'}}/>;
            }

        }
        //(typeof foto === 'undefined'
    fotoQuestion() {
            if(this.props.quiz.attachment !== null){
                return <img src={this.props.quiz.attachment.url} alt="img pregunta" style={{width: 300}}/>;
            }else{
                return <img src={interrogacion} alt="img pregunta" style={{width: 300}}/>;
            }
        }
    
     render(){
        return(
            <div className= 'selia'> 
            <div>
            <div className='cositas'><h1><Text tid="pregunta"/>{this.props.numquiz+1} </h1></div>
                    <div className='cositas'><h1>{this.props.quiz.question}
                    </h1></div>
                    <div>{this.fotoQuestion()}</div>
            </div>
                    

            
            <div className='autor'>
            <div>{this.fotoUser()}</div>
            <div>{this.user()}</div>
                
            </div>
                
            </div>
        );  
        }
}