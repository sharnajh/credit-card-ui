import React from "react";
import chip from "./icons8-chip-card-40.png";
import Cleave from "cleave.js/react";

class CreditCard extends React.Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    cardHolderName: "",
    cardExpirationDate: "",
    cardCVV: ""
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
  setCVV = e => {
    const cardCVV = e.target.value;
    this.setState({ cardCVV });
  };
  render() {
    const {
      cardNumber,
      cardHolderName,
      cardExpirationDate,
      cardCVV
    } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <div className="credit-card">
          <div id="card-type">Credit Company</div>
          <img alt="chip" style={{ width: "50px" }} src={chip} />
          <div id="card-number">{cardNumber}</div>
          <div id="card-expiration">Valid Thru {cardExpirationDate}</div>
          <div id="card-holder-name">{cardHolderName}</div>
        </div>
        <form className="card-form">
          <label className="input-label">
            Credit Card Number*
          </label>
          <Cleave
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            id="number-input"
            name="number-input"
            className="text-input"
            onChange={this.setNumber}
          />
          <label className="input-label">Card Holder Name*</label>
          <input
            type="text"
            placeholder="Enter card holder name"
            value={cardHolderName}
            onChange={e => this.setName(e)}
            className="text-input"
          />
          <div className="date-and-csv" style={{ display: "flex" }}>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="input-label">
                Expiration Date* (ex: 2019/01)
              </label>
              <Cleave
                options={{
                  date: "true",
                  delimiter: "/",
                  datePattern: ["Y", "m"]
                }}
                placeholder="Enter expiration date"
                value={cardExpirationDate}
                className="text-input"
                onChange={e => this.setDate(e)}
              />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", width: "50%" }}
            >
              <label className="input-label">CVV Security Code*</label>
              <Cleave
                options={{
                  numeral: "true"
                }}
                placeholder="Enter CVV"
                maxLength="3"
                value={cardCVV}
                className="text-input"
                onChange={e => this.setCVV(e)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreditCard;
