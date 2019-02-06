import React from "react";
import ButtonNext from "../../../components/ButtonNext";

function Setting(props) {
  return (
    <div>
      <form onSubmit={e => props.onSubmit(e)}>
        <input
          type="checkbox"
          name="name"
          value="name"
          id="name"
          defaultChecked={props.defaultName}
          onChange={props.handleInputChange}
        />
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="checkbox"
          name="phone"
          value="phone"
          id="phone"
          defaultChecked={props.defaultPhone}
          onChange={props.handleInputChange}
        />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="number"
          name="number"
          defaultValue={props.defaultNumber}
          onChange={props.handleInputChange}
        />
        <label htmlFor="number">Number</label>
        <br />
        <br />
        <ButtonNext type="submit" text="submit" />
      </form>
    </div>
  );
}

export default props => Setting(props);
