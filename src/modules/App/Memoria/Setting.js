import React, { Component } from "react";
import ButtonNext from "../../../components/ButtonNext";

export default class Setting extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <input
            type="checkbox"
            name="name"
            value="name"
            id="name"
            defaultChecked={this.props.defaultName}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="checkbox"
            name="phone"
            value="phone"
            id="phone"
            defaultChecked={this.props.defaultPhone}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="number"
            name="number"
            defaultValue={this.props.defaultNumber}
            onChange={this.props.handleInputChange}
          />
          <label htmlFor="number">Number</label>
          <br />
          <br />
          <ButtonNext type="submit" text="submit" />
        </form>
      </div>
    );
  }
}
