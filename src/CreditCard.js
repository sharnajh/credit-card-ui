import React from "react";
import Cleave from "cleave.js/react";
import anime from "animejs/lib/anime.es.js";
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcJcb,
  FaCcMastercard,
  FaCcVisa,
  FaCreditCard
} from "react-icons/fa";

class CreditCard extends React.Component {
  state = {
    cardNumber: "0000 0000 0000 0000",
    cardHolderName: "",
    cardExpirationDate: "",
    cardCVV: "",
    cardType: ""
  };
  flipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "180deg",
      duration: "100",
      easing: "linear"
    });
  };
  unFlipCard = () => {
    anime({
      targets: ".credit-card-inner",
      rotateY: "360deg",
      duration: "100",
      easing: "linear"
    });
  };
  setCardType = type => {
    this.setState({ cardType: type });
  };
  checkSubstring = (length, match) => {
    return this.state.cardNumber.substring(0, length) === match;
  };
  setNumber = e => {
    const cardNumber = e.target.value;
    this.setState({ cardNumber }, () => {
      const { cardNumber } = this.state;
      if (cardNumber[0] === "4") {
        this.setCardType("Visa");
      } else if (this.checkSubstring(4, "6011")) {
        this.setCardType("Discover");
      } else if (this.checkSubstring(2, "51")) {
        this.setCardType("MasterCard");
      } else if (this.checkSubstring(2, "34")) {
        this.setCardType("AmericanExpress");
      } else if (this.checkSubstring(3, "300")) {
        this.setCardType("DinersClub");
      } else if (this.checkSubstring(2, "35")) {
        this.setCardType("JCB");
      } else {
        this.setCardType("");
      }
    });
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
      cardCVV,
      cardType
    } = this.state;
    console.log(this.state);
    return (
      <div className="container">
        <div className="credit-card">
          <div className="credit-card-inner">
            <div className="credit-card-front">
              <div id="card-type">
                {cardType === "" && <FaCreditCard />}
                {cardType === "Discover" && <FaCcDiscover />}
                {cardType === "AmericanExpress" && <FaCcAmex />}
                {cardType === "Visa" && <FaCcVisa />}
                {cardType === "DinersClub" && <FaCcDinersClub />}
                {cardType === "JCB" && <FaCcJcb />}
                {cardType === "MasterCard" && <FaCcMastercard />}
              </div>

              <div id="card-number">{cardNumber}</div>

              <div id="card-expiration">
                {cardExpirationDate !== "" && <div id="validthru">Valid Thru</div>}
                {cardExpirationDate}
              </div>

              <div id="card-holder-name">{cardHolderName}</div>
            </div>
            <div className="credit-card-back">
              <div className="card-stripe" />
              <div className="card-sig-container">
                <div className="signature">{cardHolderName}</div>
                CVV {cardCVV}
              </div>
              <p className="credits">Built with Cleave.js, Anime.js, and React Icons.</p>
            </div>
          </div>
        </div>
        <form className="card-form">
          <label className="input-label">Credit Card Number</label>
          <Cleave
            placeholder="Enter your credit card number"
            options={{ creditCard: true }}
            id="number-input"
            name="number-input"
            className="text-input"
            onChange={this.setNumber}
          />
          <label className="input-label">Card Holder Name</label>
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
                Expiration Date (ex: 2019/01)
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
              <label className="input-label">CVV Security Code</label>
              <Cleave
                options={{
                  numeral: "true"
                }}
                placeholder="Enter CVV"
                maxLength="3"
                value={cardCVV}
                className="text-input"
                onChange={e => this.setCVV(e)}
                onFocus={this.flipCard}
                onBlur={this.unFlipCard}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreditCard;
