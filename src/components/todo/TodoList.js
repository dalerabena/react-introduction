import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class List extends Component {
  render() {
    return (
      <div className='col-md-8 col-md-offset-2'>
        <ListGroup>
          {
            this.props.items.map((item, index) =>             
              <ListGroupItem href="#" key={index} onClick={this.props.handleDelete.bind(this, index)}>{item}</ListGroupItem>
            )
          }
        </ListGroup>
      </div>  
    );
  }
}

export default List;
