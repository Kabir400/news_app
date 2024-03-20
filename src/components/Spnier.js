import React, { Component } from "react";
import loading from "../loadng.gif";
export default class Spnier extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
