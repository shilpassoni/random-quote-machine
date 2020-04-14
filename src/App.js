import React, { Component } from 'react';
import {fas} from 'font-awesome-icons';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }
  componentDidMount() {
     this.getQuote();
  }

  getQuote(){
    let url= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    axios.get(url)
       .then(res => {
         let data = res.data.quotes
         let quotenum = Math.floor(Math.random() * data.length) //quote number
         let randomQuote = data[quotenum] //actual quote

         this.setState({
           quote: randomQuote['quote'],
           author: randomQuote['author']
         })
       })
  }
  getNewQuote = () => {
      this.getQuote()
  }
    render() {
        const { quote, author } = this.state
        return (
            <div className="container-fluid">
              <h1>Random Quote Machine</h1>  
              <div id="wrapper">
                <div id="quote-box">
                  <div className="quote-text">
                    <i class="fas fa-quote-left"></i>   
        <span id="text">{quote}</span> 
                  </div>  
                  <div className="quote-author">
        <span id="author">{author}</span>   
                  </div>
                  <div className="buttons">
                    <a 
                      className="button" 
                      id="tweet-quote"
                      title="Tweet this quote!"
                     >
                     Tweet
                     </a>
                     <button className="button"
                         id="new-quote">New Quote</button>   
                  </div>
                </div>  
              </div>  
            </div>
        )
    }
}
export default App;
