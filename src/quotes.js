import React, { Component } from "react";
import "./quotes.css";

// array full of quotes
export const quoteList = [
    {
        name: 'Ahri',
        quote: 'If you\'d like to play with me, you\'d better be sure you know the game.'
    },
    {
        name: 'Akali',
        quote: 'The rules hold you back, leave \'em for someone who needs \'em.'
    },
    {
        name: 'Alistar',
        quote: 'You can\'t milk those.'
    },
    {
        name: 'Anivia',
        quote: 'Laying an egg isn\'t as easy as it looks.'
    },
    {
        name: 'Azir',
        quote: 'You need not follow, but you must witness.'
    },
    {
        name: 'Braum',
        quote: 'Even heaviest door can be opened.'
    },
    {
        name: 'Camille',
        quote: 'It\'s not lies that cut but the sharpness of the truth.'
    },
    {
        name: 'Ekko',
        quote: 'I\'d rather make mistakes than make nothing at all.'
    },
    {
        name: 'Evelynn',
        quote: 'Every smile is just a frown waiting to be turned upside down.'
    },
    {
        name: 'Ezreal',
        quote: 'Little piece of advice: If no one tells you something is impossible, then it\'s still possible.So go do it.'
    },
    {
        name: 'Gnar',
        quote: 'Goova.'
    },
    {
        name: 'Heimerdinger',
        quote: 'Every problem solved is another revealed.'
    },
    {
        name: 'Illaoi',
        quote: 'We cannot comprehend the design. A raindrop cannot comprehend a river valley.'
    },
    {
        name: 'Irelia',
        quote: 'We do this for those who came before us, and those who come next.'
    },
    {
        name: 'Ivern',
        quote: 'I find that the stranger life gets, the more it seems to make sense.'
    },
    {
        name: 'Kai\'Sa',
        quote: 'When memories fade and darkness surrounds you, find the strength inside.'
    },
    {
        name: 'Karthus',
        quote: 'Agony, ecstasy, peace. Every passing has a beauty all its own.'
    },
    {
        name: 'Kayle',
        quote: 'There is right, and there is wrong. All else is rationalization.'
    },
    {
        name: 'Kha\'Zix',
        quote: 'Do not fear death. The best part of you will live on!'
    },
    {
        name: 'Kled',
        quote: 'Holy sh**, where are we?'
    },
    {
        name: 'Lee Sin',
        quote: 'Enlightenment is knowing the value of one\'s ignorance.'
    },
    {
        name: 'Lulu',
        quote: 'You\'ll see more with your eyes closed.'
    },
    {
        name: 'Thresh',
        quote: 'Death? ...No, nothing that simple.'
    },
    {
        name: 'Master Yi',
        quote: 'The focused mind can pierce through stone.'
    },
    {
        name: 'Nasus',
        quote: 'The past is a tapestry of what lies ahead.'
    },
    {
        name: 'Nautilus',
        quote: 'Forward, forward.'
    },
    {
        name: 'Pantheon',
        quote: 'Pressing forward is not the same as running from your mistakes.'
    },
    {
        name: 'Rammus',
        quote: 'Ok.'
    },
    {
        name: 'Ryze',
        quote: 'Knowledge is a real weapon.'
    },
    {
        name: 'Soraka',
        quote: 'Every step; a new journey.'
    },
    {
        name: 'Varus',
        quote: 'Beware a man with nothing to lose.'
    },
    {
        name: 'Yasuo',
        quote: 'The road to ruin is shorter than you think.'
    },
    {
        name: 'Zed',
        quote: 'Brave the shadows, find the truth.'
    },
    {
        name: 'Zilean',
        quote: 'Time flies like an arrow. Fruit flies like banana.'
    }
]

class Quotes extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {};
    }

    // event handler for the button being pressed; changes state through App.js then plays the new sound
    buttonPressed() {
        this.props.handleNewQuote();
        var audio = document.getElementById('sound'); // accesses audio tag in render
        if (window.chrome) audio.load(); // loads the new sound
        audio.play(); // plays the sound
    }

    // this puts everything on the screen
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', verticalAlign: 'center' }}>
                <div className='image' style={{ flex: 1 }}>
                    <img src={require('./images/' + quoteList[this.props.champ].name + 'Square.png')} alt='MissingPNG' height="120vh" width="120vh" />
                </div>
                <div className='quote' style={{ flex: 1 }}>
                    <i>{quoteList[this.props.champ].quote}</i> - {quoteList[this.props.champ].name}
                    <audio autoPlay preload='auto' id='sound'>
                        {console.log('./sounds/' + quoteList[this.props.champ].name + 'Sound.ogg')}
                        <source src={require('./sounds/' + quoteList[this.props.champ].name + 'Sound.ogg')} type='audio/ogg'></source>
                        Audio not found
                 </audio>
                </div>
                <div style={{ flex: 1 }}>
                    <button
                        className="newQuoteButton"
                        type="button"
                        onClick={() => this.buttonPressed()}
                    >
                        New Quote
                </button>
                </div>
            </div>
        )
    }
}

export default Quotes;