import {Component} from "react";
// import "./styles.css";
import CardForm from "./Components/Task 3/Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { number: "7653 7553 5693 9862", balance: 100 },
        { number: "7453 9736 0763 3474", balance: 400 },
        { number: "9577 7543 9379 9784", balance: 800 }
      ]
    };
  }
  handleCloseCard = (idx) => {
    const clone = this.state.employees.filter(
      (item)=> item.name !== idx
   );
this.setState({ employees: clone });

  };

  handleOpenCard = (card) => {
    // YOUR CODE HERE 2
    console.log(card);
  };

  render() {
    return (
      <div className="app">
        <CardForm handleOpenCard={this.handleOpenCard} />
        {this.state.cards.map(({ number, balance }) => (
          <div key={number} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                Карта <br />
                {number}
              </h5>
              <div className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">Баланс: {balance}</li>
                  <hr />
                  {this.state.employees.map((user, index) => (

                  <button
                  key={user.name}
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleCloseCard(index)}
                  >
                    Закрыть карту
                  </button>))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
