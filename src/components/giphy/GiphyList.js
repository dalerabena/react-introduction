import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

class GiphyList extends Component {

  notify = (msg) => toast.success(msg);

  handleClick = (e) => {
    console.log(e.target.src);
    // this.notify("wew");
  }

  render() {

    const { q, img } = this.props;

    const imglist = img.map((item) =>
      <li key={item.id} >
        <img src={item.images.fixed_height.url} alt={item.id} onClick={this.handleClick} />
      </li>      
    );

    return (
      <div>
        <h3>Search result for {q}</h3>
        <ul>{imglist}</ul>
        <ToastContainer />
      </div>
    );
  }
}

export default GiphyList;
