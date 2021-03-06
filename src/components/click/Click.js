import React, { Component } from 'react';
import { Grid, Row, Button, ButtonGroup, PageHeader } from 'react-bootstrap';

class Giphy extends Component {

  constructor() {
    super();
    this.state = {
      show: true,
      clicks: 0
    };
  }

  plusOne = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  minusOne = () => {
    this.setState({
      clicks: this.state.clicks - 1
    });
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  }

  resetClicks = () => {
    this.setState({
      clicks: 0
    });
  }

  render() {

    const divStyle = {
      textAlign: 'center'
    }

    const container = {
      marginTop: '50px'
    }

    return (     
      <Grid>
        <Row className="show-grid" style={container}>
          <div className='col-md-8 col-md-offset-2 center'>
            <PageHeader>Clicks</PageHeader>
            <div style={divStyle}>
              <ButtonGroup>
                <Button onClick={this.plusOne}>+1</Button>
                <Button onClick={this.minusOne}>-1</Button>
                <Button onClick={this.resetClicks}>Reset Clicks</Button>
                <Button onClick={this.toggleShow}>{this.state.show ? 'Hide clicks' : 'Show clicks'}</Button>
              </ButtonGroup>
              <h1>{this.state.show ? this.state.clicks : ''}</h1> 
            </div>            
          </div>
        </Row>
      </Grid>
    );
  }
}

export default Giphy;
