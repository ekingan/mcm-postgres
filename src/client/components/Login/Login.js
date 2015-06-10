'use strict';
import './Login.less';

import React from 'react';
import Bootstrap from 'react-bootstrap';
import Router from 'react-router';

import AuthActions from '../../flux/actions/AuthActions';
import AuthStore from '../../flux/stores/AuthStore';
import ActionTypes from '../../flux/constants/ActionTypes';

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

export default React.createClass({

  propTypes: { },

  componentDidMount: function() {

  },

  onGoToSignIn: function(){
    window.location = '/auth/connect/';
  },

  render: function() {

    return (
      <div className={'login'}>
          <div className="login-box">
            <h1>Base</h1>

            <Bootstrap.Button className="btn-danger" onClick={this.onGoToSignIn}>
              Sign in with Google
            </Bootstrap.Button>
          </div>

      </div>
    );

  }
});
