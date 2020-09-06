import React from "react";
import DisplayDashboardContent from "./DisplayDashboardContent";

export default class VerticalNav extends React.Component {
  componentDidMount() {
    function script() {
      var li_items = document.querySelectorAll(".sidebar ul li");
      var hamburger = document.querySelector(".hamburger");
      var wrapper = document.querySelector(".wrapper");

      li_items.forEach((li_item) => {
        li_item.addEventListener("mouseenter", () => {
          if (wrapper.classList.contains("click_collapse")) {
            return;
          } else {
            li_item.closest(".wrapper").classList.remove("hover_collapse");
          }
        });
      });

      li_items.forEach((li_item) => {
        li_item.addEventListener("mouseleave", () => {
          if (wrapper.classList.contains("click_collapse")) {
            return;
          } else {
            li_item.closest(".wrapper").classList.add("hover_collapse");
          }
        });
      });

      hamburger.addEventListener("click", () => {
        hamburger.closest(".wrapper").classList.toggle("click_collapse");
        hamburger.closest(".wrapper").classList.toggle("hover_collapse");
      });
    }
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
                    <i class="fas fa-link"></i>
                  </span>
                  <span class="text">My live classes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon">
                    <i class="fas fa-link"></i>
                  </span>
                  <span class="text">Course catlog</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="icon">
                    <i class=" far fa-comment-alt"></i>
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
