import React from "react";
import chip from "./icons8-chip-card-40.png";
import Cleave from 'cleave.js/react';

class CreditCard extends React.Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    cardHolderName: "",
    cardExpirationDate: "01/01"
  };
  setNumber = e => {
    const cardNumber = e.target.value;
    this.setState({ cardNumber });
  };
  setName = e => {
    const cardHolderName = e.target.value.toUpperCase();
    this.setState({ cardHolderName });
  };
  setDate = e => {
    const cardExpirationDate = e.target.value;
    this.setState({ cardExpirationDate });
  };
  render() {
    const { cardNumber, cardHolderName, cardExpirationDate } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <div className="credit-card">
          <div id="card-type">Credit Type</div>
          <img alt="chip" style={{ width: "50px" }} src={chip} />
          <div id="card-number">{cardNumber}</div>
          <div id="card-expiration">Valid Thru {cardExpirationDate}</div>
          <div id="card-holder-name">{cardHolderName}</div>
        </div>
        <form className="card-form">
        <Cleave placeholder="Enter your credit card number"
                options={{creditCard: true}}
                id="number-input"
                className="text-input"
                onChange={this.setNumber} />
          <input
            type="text"
            placeholder="Enter card holder name"
            value={cardHolderName}
            onChange={e => this.setName(e)}
            className="text-input"
          />
          <input
            type="month"
            placeholder="Enter expiration date"
            value={cardExpirationDate}
            onChange={e => this.setDate(e)}
          />
        </form>
      </div>
    );
  }
}

export default CreditCard;
