import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FormGroup, ControlLabel, FormControl, Button, HelpBlock, PageHeader } from 'react-bootstrap';

import GiphyList from './GiphyList';
import Gallery from './Gallery';

import 'react-toastify/dist/ReactToastify.min.css';

class Giphy extends Component {

  constructor() {
    super();
    this.state = {
      q: '',
      preq: '',
      img: []
    };
  }

  handleClick = (e) => {
    console.log(e.target.src);
    this.notify("wew");
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSearch = (event) => {
    event.preventDefault();

    const api_key = 'o98e0QYW4ZNdTQ6TG5vwpK1u8EnbgRb6';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${this.state.q}&limit=25`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          q: '',
          preq: this.state.q,
          img: data.data
        });
      })
      .catch((error) => {
        console.log('error, ' + error);
      });
  }

  render() {

    const divStyle = {
      marginBottom: '15px'
    };

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12' style={divStyle}>
            <PageHeader>Gif</PageHeader>
            <form onSubmit={this.handleSearch}> 
              <FormGroup>
                <FormControl 
                  name='q'
                  value={this.state.q}
                  onChange={this.handleChange}
                  placeholder='Enter keyword to search'
                />
              </FormGroup>
              <Button bsStyle='primary' type='submit'>Search</Button>
            </form>
          </div>
          {/* <GiphyList q={this.state.preq} img={this.state.img} /> */}
          <Gallery q={this.state.preq} img={this.state.img} />
        </div>
      </div>
    );
  }
}

export default Giphy;
