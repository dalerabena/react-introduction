import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {

    const { links } = this.props;

    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" to={links[0].to}>{links[0].name}</NavLink>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    {
                      links.slice(1).map((link, key) => 
                        <li key={link.to}>
                          <NavLink to={link.to}>{link.name}</NavLink>
                        </li>
                      )
                    }
                </ul>
            </div>
        </div>
      </nav>
    );
  }
}
