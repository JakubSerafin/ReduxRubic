import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var CellsNames = ["Z", "B", "C", "D", "E", "F"];
class RubicCube {
  State = [[]];

  constructor() {
    this.State = [];
    for (let i = 0; i < 7; i++) {
      this.State.fill(CellsNames[i], 9 * i, 9 * i + 9);
    }
  }
}

class Cube extends React.Component {
  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td />
            <td>
              <Wall cells={this.props.cube.State} />
            </td>
            <td />
            <td />
          </tr>
          <tr>
            <td>
              <Wall />
            </td>
            <td>
              <Wall />
            </td>
            <td>
              <Wall />
            </td>
            <td>
              <Wall />
            </td>
          </tr>
          <tr>
            <td />
            <td>
              <Wall />
            </td>
            <td />
            <td />
          </tr>
        </table>
      </div>
    );
  }
}
class Wall extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Cell cellText={this.props.cells[0]} />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div>
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    );
  }
}

class Cell extends React.Component {
  render() {
    return <span>{this.props.cellText}</span>;
  }
}

const rootElement = document.getElementById("root");
const rcube = new RubicCube();
ReactDOM.render(<Cube cube={rcube} />, rootElement);
