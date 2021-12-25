import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.boardClick = this.boardClick.bind(this);
  }
  boardClick(rowNumber, columnNumber) {
    this.props.appClick(rowNumber, columnNumber);
  }
  render() {
    let board = this.props.values.map((rowValues, rowIndex) => {
      let row = rowValues.map((value, columnIndex) => {
          return (
            <Square value={value} key={rowIndex + "-" + columnIndex} rowIndex={rowIndex}
                    columnIndex={columnIndex} boardClick={this.boardClick}/>
        );
      });
      return (
        <div key={"row" + rowIndex}>
          {row}
        </div>
      );
    });

    return (
       <div>
        {board}
       </div>
    );
  }
}