import React, { Component } from 'react';
import './App.css';
import Quotes from './quotes.js';
import * as list from './quotes.js';


const qll = list.quoteList.length;

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      champ: Math.floor(Math.random() * qll) // selects a random number to pick from the array of quotes
    }
  }

  handleNewQuote = () => {
    this.setState(prevState => {
      return { champ: Math.floor(Math.random() * qll) }; // selects another random number
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          Quote Generator
        </div>
        {console.log(qll)}
        <div className="App-body">
          <Quotes handleNewQuote={this.handleNewQuote} champ={this.state.champ} />
        </div>
      </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Quotes />
//       </header>
//     </div>
//   );
// }

export default App;
