import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Ryan",
        score: 0,
        id: 1
      },
      {
        name: "Victoria",
        score: 0,
        id: 2
      },
      {
        name: "Trevor",
        score: 0,
        id: 3
      },
      {
        name: "Jess",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id:this.prevPlayerId += 1
          }
        ]
      }

    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players = {this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()} 
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore ={this.handleScoreChange}

          />
        )}
        <AddPlayerForm 
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
