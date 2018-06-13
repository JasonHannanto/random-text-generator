import React, { Component } from "react";

class Lorem extends Component {
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
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>
    );
  }
}

export default Lorem;
