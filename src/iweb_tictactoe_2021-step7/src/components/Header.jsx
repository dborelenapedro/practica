import React from 'react';
import {Card} from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
          <Card style={{textalign: 'center'}}>
            <Card.Body>
              <Card.Title>Turn</Card.Title>
              <Card.Text>
               {this.props.text}
               
              </Card.Text>
            </Card.Body>
          </Card>
        );
    }

}

