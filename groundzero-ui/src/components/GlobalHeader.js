import * as React from "react";

export default class GlobalHeader extends React.Component {
  render() {
    return (
      <div class="wrapper hover_collapse">
        <div class="top_navbar">
          <div class="hamburger">
            <i class="fas fa-bars"></i>
          </div>
          <div class="logo">Groundzerolearning</div>
        </div>
        <div class="menu"></div>
      </div>
    );
  }
}
