import React from 'react';
import './AnimationLoader.css';

export default class AnimationLoader extends React.Component {
  render() {
    return (
      <div className="loader">
        <div className="inner one"/>
        <div className="inner two"/>
        <div className="inner three"/>
      </div>
    );
  }
}