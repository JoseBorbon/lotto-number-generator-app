import React, { Component } from 'react';
import './LottoNumbers.css';

class LottoNumbers extends Component {
  static defaultProps = {
    numQuantity: 6,
    maxNum: 40,
    title: 'Lotto',
  };

  constructor(props) {
    super(props);
    this.state = {
      digits: new Array(this.props.numQuantity).fill(
        <li className="LottoNumbers-hide"></li>
      ),
    };
    this.createLottoNums = this.createLottoNums.bind(this);
  }

  createLottoNums = () => {
    this.setState(() => {
      const result = [...new Array(this.props.numQuantity)].map(() => (
        <li>{Math.floor(Math.random() * (this.props.maxNum + 1))}</li>
      ));

      return { digits: result };
    });
  };

  render() {
    return (
      <div className="Lotto-Ticket">
        <div>
          <h1>{this.props.title}</h1>
          <ul>{this.state.digits}</ul>
        </div>
        <button onClick={this.createLottoNums}>Generate</button>
      </div>
    );
  }
}

export default LottoNumbers;
