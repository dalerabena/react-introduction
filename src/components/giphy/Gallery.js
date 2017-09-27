import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

export default class Gallery extends Component {

  // componentDidMount() {
  //   this.hide();
  // }

  // handleImagesLoaded(imagesLoadedInstance) {
  //   this.show();
  // }

  render() {

    const { q, img } = this.props;

    const liStyle = {
      margin: '4px'
    }

    const childElements = img.map((item) =>
      <li key={item.id} style={liStyle} >
        <img src={item.images.fixed_height.url} alt={item.id} />
      </li>
    );

    const masonStyle = {
      listStyleType: 'none'
    }

    return(
      <div className='col-md-12'>
        <Masonry
          //onImagesLoaded={this.handleImagesLoaded}
          //onLayoutComplete={laidOutItems => this.handleLayoutComplete(laidOutItems)}
          //onRemoveComplete={removedItems => this.handleRemoveComplete(removedItems)}
          //className={'my-gallery-class'} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false}
          updateOnEachImageLoad={true}
          style={masonStyle}
        >
          {childElements}
        </Masonry>
      </div>      
    );
  }
}
