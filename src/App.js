import React, { Component } from "react";
import axios from "axios";
import "./App.css";

// API PARAMS:
// type: all-meat for meat only or meat-and-filler for meat mixed with miscellaneous ‘lorem ipsum’ filler.
// paras: optional number of paragraphs, defaults to 5.
// sentences: number of sentences (this overrides paragraphs)
// start-with-lorem: optional pass 1 to start the first paragraph with ‘Bacon ipsum dolor sit amet’.
// format: ‘json’ (default), ‘text’, or ‘html’

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "meat-and-filler",
      paras: 4,
      sentences: 5,
      startwithlorem: 1,
      format: "text",
      text: ""
    };
  }

  componentWillMount() {
    this.getRandomText();
  }
  // https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1
  getRandomText() {
    axios
      .get(
        "https://baconipsum.com/api/?type=" +
          this.state.type +
          "&paras=" +
          this.state.paras +
          "&sentences" +
          this.state.sentences +
          "&startwithlorem=" +
          this.state.startwithlorem +
          "&format=" +
          this.state.format
      )
      .then(res => {
        this.setState({
          text: res.data,
          function() {
            console.log(this.state);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <div className="App">Random Text Generator</div>;
  }
}

export default App;
