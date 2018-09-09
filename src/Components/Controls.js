import React, { Component } from 'react';
import './Music.css'

export default class Controls extends Component {
    render() {
      return (
        <div className="Controls">
          <i
            id="prev"
            className="glyphicon glyphicon-step-backward"
            onClick={this.props.onClick}
          />
          {!this.props.playing &&
            <i
              id="play"
              onClick={this.props.onClick}
              className="glyphicon glyphicon-play"
            />}
          {this.props.playing &&
            <i
              id="pause"
              onClick={this.props.onClick}
              className="glyphicon glyphicon-pause"
            />}
          <i
            id="next"
            className="glyphicon glyphicon-step-forward"
            onClick={this.props.onClick}
          />
        </div>
      );
    }
  }
  