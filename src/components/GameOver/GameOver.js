import React,{Component} from 'react';
import './GameOver.css'


class GameOver extends Component {
    state = {  } 

    backandler = (props) =>{
        this.props.restartGame();
    }

    render(props) { 
        return (
        <div className='GameOverScrean'>
        <button className='b' onClick={this.backandler}>Powrót</button>
        
    </div>
    );
    }
}
 
export default GameOver;




