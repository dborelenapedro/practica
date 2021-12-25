import React from 'react';
import {Button} from 'react-bootstrap';

export default class Reset extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
    }

    click() {
        this.props.resetClick();
    }

    render() {
        return(
          <Button onClick={this.click} >
            Reset
          </Button>
        );
    }
}