import React from "react";

export default class VerticalNav extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div class="sidebar">
          <div class="sidebar_inner">
            <ul>
              <li>
                <a href="/live">
                  <span class="icon">
                    <i class="fas fa-link"/>
                  </span>
                                    <span class="text">My live classes</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                  <span class="icon">
                    <i class="fas fa-link"/>
                  </span>
                                    <span class="text">Course catlog</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                  <span class="icon">
                    <i class=" far fa-comment-alt"/>
                  </span>
                                    <span class="text">Discussion form</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
