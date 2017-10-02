import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import 'font-awesome/css/font-awesome.css';

class List extends Component {
  render() {
    return (
      <div className='col-md-8 col-md-offset-2'>
        <ListGroup>
          {
            this.props.items.map((item, index) =>             
              <ListGroupItem href="#" key={item.id} onClick={this.props.handleComplete.bind(this, index)}>
                {item.title}
                {item.completed ? (
                  <i className='fa fa-check pull-right text-success'></i>
                ) : (
                  <i className='fa fa-check pull-right text-danger'></i>
                )}
              </ListGroupItem>
            )
          }
        </ListGroup>
      </div>  
    );
  }
}

export default List;