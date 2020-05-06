import React, { Component } from "react";
import "./Bouton.css";
import Modal from "./Modal";

class Bouton extends Component {
  state = {
    visible: false,
  };

  montre = () => {
    this.setState({ visible: true });
  };

  cache = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.montre} className="Bouton">
          Clique moi
        </button>
        <Modal visible={this.state.visible} cache={this.cache} />
      </div>
    );
  }
}

export default Bouton;
