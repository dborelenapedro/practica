import React from 'react';
import ReactDOM from 'react-dom';

import {Text} from './Language';

import Game from '../Quiz/Game.jsx';

//import {array} from '../assets/mock-data';
import { render } from '@testing-library/react';
import Terminado from '../Quiz/Terminado';


export default class Quiz extends React.Component {

    constructor(props){
        console.log("constructor quiz");
        super(props);
        this.state={
            score : 0,
            finished : false,
            currentQuiz : 0,
            quizzes:[ ],
            value: ' ',
            contestados: [ ],
            loading : true, 
        };
        this.siguiente = this.siguiente.bind(this);
        this.anterior = this.anterior.bind(this);
        this.respuesta = this.respuesta.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.moveIndex = this.moveIndex.bind(this);
        this.reset = this.reset.bind(this);
    }
    

    componentDidMount() {
        //console.log("descarga");
        let token = "d74e4cdf0df41da5a54c";
        let url = "https://core.dit.upm.es/api/quizzes/random10wa?token="+token;
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                quizzes: [...result],
                loading : false
            });
          }
           
        )
    }
    reset(){
        let token = "d74e4cdf0df41da5a54c";
        let url = "https://core.dit.upm.es/api/quizzes/random10wa?token="+token;
        fetch(url)
        .then(res => res.json())
        .then((result) => {
            this.setState({
                score : 0,
                finished : false,
                currentQuiz : 0,
                quizzes:[...result],
                value: ' ',
                contestados: [ ], 
            })
            
        });
    }
  
    siguiente() {
        let finish = false;
        let long = this.state.quizzes.length-1;
        let sig;
        if(this.state.currentQuiz === long){
            sig = long;
            finish = true;
        
        }else{
            sig = this.state.currentQuiz+1;
        }
        this.setState({
            finished : finish,
            currentQuiz : sig,
            value : ''
        });
    }

    anterior() {
        let ant;
        if (this.state.currentQuiz === 0){
            ant = 0;
        }else{
            ant = this.state.currentQuiz-1;
        }
        this.setState({
            currentQuiz : ant,
            value: ''
        });
    }

    respuesta(event){
        //console.log(this.state.currentQuiz);
        if(this.state.value.trim().toLocaleLowerCase() === this.state.quizzes[this.state.currentQuiz].answer.trim().toLocaleLowerCase()){
            if(!this.state.contestados.includes(this.state.currentQuiz)){
                let scores = this.state.score +1;
                this.setState({
                    score: scores,
                    contestados: [...this.state.contestados, this.state.currentQuiz]
                });
            }
            }else{
            if(this.state.contestados.includes(this.state.currentQuiz)){
                let aux = [...this.state.contestados];
                let int = aux.indexOf(this.state.currentQuiz);
                aux[int] = null;
                let scores = this.state.score -1;
                this.setState({
                    score: scores,
                    contestados: [...aux]
                })
            }
        
    }
    this.siguiente();
    event.preventDefault();
}

    handleChange(event){
        this.setState({
            value: event.target.value
        });
        //console.log(this.state.value);
    }
    
    moveIndex(id){
        this.setState({
            currentQuiz : id,
            value: ''
        });
    }

    


    render() {
        let t1 = <Text tid="comprobar"/>
        let t2 = <Text tid="terminar"/>
        const currentQuiz = this.state.currentQuiz;
        let next = <button onClick= {this.siguiente} className='Button'><Text tid="siguiente"/></button>;
        let reset = <button onClick= {this.reset} className='Button'><Text tid="reset"/></button>;
        let anterior = <button onClick= {this.anterior} className='Button'><Text tid="anterior"/></button>;
        let submit =   <form onSubmit={this.respuesta} >
                            <label>
                                Respuesta:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <button type="submit" className='Button'>{this.state.currentQuiz===9 ? t2 : t1}  </button>
                        </form>
        return (
        <div>
        {this.state.loading ? <h1>Cargando</h1> :
            <div className='jueguito'>
           
            { this.state.finished ? <Terminado score = {this.state.score}/>  :
            <div className='aplic'>
            <div className= 'fn3on'>
            <div><Game quiz={this.state.quizzes[currentQuiz]} numquiz = {this.state.currentQuiz} /></div>
            <div >{submit}</div>
            </div>
            <div className= "d-flex">
            <div >{anterior}</div>
            <div>{reset}</div>
            <div >{next}</div>
            
            </div>

            <div>
            <ul style={{display: 'inline'}}>
                {this.state.quizzes.map(quiz => (
                    <li key={quiz.id} style={{display:'inline'}}>
                        <button onClick= {()=>this.moveIndex(this.state.quizzes.indexOf(quiz))} className='Button'> {this.state.quizzes.indexOf(quiz)+1} </button>
                    </li>
                ))}
                
            </ul>
            </div>
            </div>
            }
            {this.state.finished ? <div>{reset}</div> : ""}
            
        </div>
        }
        </div>  
           
        );
    }
}
    ReactDOM.render(
        <Quiz />,
        document.getElementById("root")
    );

    //this.moveIndex(this.state.quizzes.indexOf(quiz))
