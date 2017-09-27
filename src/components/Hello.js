import React, { Component } from 'react';

const container = {
  marginTop: '50px'
}

const Hello = () => (
  <div className="container" style={container}>  
      <div className="row">
          <div className="col-lg-12 text-center">
              <h1>A Bootstrap Starter Template</h1>
              <p className="lead">Complete with pre-defined file paths that you won't have to change!!</p>
              <ul className="list-unstyled">
                  <li>Bootstrap v3.3.6</li>
                  <li>jQuery v1.11.1</li>
              </ul>
          </div>
      </div>
  </div>
)

export default Hello;
