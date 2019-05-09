import React, { Component } from 'react';
import ReactWordcloud from "react-wordcloud";
import './App.css';

class MyWordCloud extends Component {

    constructor(props){
        super(props);
        this.state = { text:"", 
                        words : [] 
                     };
    }

    getText = (evt) => {
          this.setState({text : evt.target.value});
    }

    generateWordCloud = () => {
        let text = this.state.text;
            text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?\n]/g," ");
            text = text.replace(/\s{2,}/g," ");
        let text_array = text.split(" ");
        let obj = {};
        for(let i=0; i<text_array.length; i++) {
            if( obj.hasOwnProperty(text_array[i]) ){
                obj[ text_array[i] ]++;
            } else {
                obj[ text_array[i] ] = 1;
            }
        }
        let words = [];
        for(let key in obj ) {
            let temp_obj = {};
            temp_obj["text"]  = key;
            temp_obj["value"] = obj[key];
            words.push(temp_obj);
        }
        this.setState({words:words});
    }

    render() {

        const words = this.state.words;
  
        return (
                <div className="Word-Cloud-Container">
                    <div>
                        <textarea className="Word-Cloud-Text" onChange={this.getText}></textarea>
                    </div>
                    <div>
                        <button onClick={this.generateWordCloud}>Generate Word Cloud</button>
                    </div>
                    <div className="Word-Cloud">
                        <ReactWordcloud words={words} />
                    </div>
                </div>
            );
    }

}

export default MyWordCloud;