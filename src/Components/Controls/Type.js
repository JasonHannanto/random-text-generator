import React, { Component } from "react";

class Type extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  onChange(e) {
    this.setState({ value: e.target.value }, function() {
      this.props.onChange(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <select className="form-control" onChange={this.onChange.bind(this)}>
          <option value="all-meat">Meat Only</option>
          <option value="meat-and-filler">Meat and Filler</option>
        </select>
      </div>
    );
  }
}

export default Type;
