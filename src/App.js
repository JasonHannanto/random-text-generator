import React, { Component } from "react";
import Output from "./Components/Output";
import Type from "./Components/Controls/Type";
import Lorem from "./Components/Controls/Lorem";
import Text from "./Components/Controls/Text";
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
      type: "all-meat",
      paras: "4",
      sentences: "5",
      startwithlorem: "1",
      format: "text",
      text: ""
    };
  }

  componentWillMount() {
    this.getRandomText();
  }
  // https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1
  getRandomText() {
    console.log(
      "https://baconipsum.com/api/?type=" +
        this.state.type +
        "&sentences=" +
        this.state.sentences +
        "&start-with-lorem=" +
        this.state.startwithlorem +
        "&format=" +
        this.state.format
    );
    axios
      .get(
        "https://baconipsum.com/api/?type=" +
          this.state.type +
          "&sentences=" +
          this.state.sentences +
          "&start-with-lorem=" +
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

  changeType(type) {
    this.setState({ type: type }, this.getRandomText);
  }

  changeLorem(bool) {
    this.setState({ startwithlorem: bool }, this.getRandomText);
  }

  // changeParas(num) {
  //   this.setState({ paras: num }, this.getRandomText);
  // }

  changeSentences(num) {
    this.setState({ sentences: num }, this.getRandomText);
  }

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Random Text Generator w/ React</h1>
        <hr />
        <hr />
        <form className="form">
          <div className="formatter">
            <div className="form-group">
              <div className="formitems">
                <label>Type:</label>
                <Type
                  value={this.state.type}
                  onChange={this.changeType.bind(this)}
                />
              </div>

              <div className="formitems">
                <label>Start with Lorem:</label>
                <Lorem
                  value={this.state.type}
                  onChange={this.changeLorem.bind(this)}
                />
              </div>
              <div className="formitems">
                <label>Sentences:</label>
                <Text
                  value={this.state.sentences}
                  onChange={this.changeSentences.bind(this)}
                />
              </div>
            </div>
          </div>
        </form>
        <hr />
        <Output className="outputfield" value={this.state.text} />
      </div>
    );
  }
}

export default App;
