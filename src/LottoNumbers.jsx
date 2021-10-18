import React, { Component } from 'react';

class LottoNumbers extends Component {
  static defaultProps = {
    numQuantity: 6,
    maxNum: 40,
    title: 'Lotto',
  };

  constructor(props) {
    super(props);
    this.state = {
      digits: new Array(this.props.numQuantity),
    };
    this.createLottoNums = this.createLottoNums.bind(this);
  }

  createLottoNums() {
    this.setState(() => {
      const result = [...new Array(this.props.numQuantity)].map((el) =>
        Math.floor(Math.random() * (this.props.maxNum + 1))
      );

      return { digits: result };
    });
  }

  render() {
    return (
      <div>
        {this.props.numQuantity} , {this.props.maxNum} , {this.props.title} ,
        <button onClick={this.createLottoNums}></button>
      </div>
    );
  }
}

export default LottoNumbers;
