import React from "react";
import "./App.css";
export default function Header() {
  return (
    <div class="overview">
      <h1 id="city">New York</h1>
      <ul>
        <li>
          Last updated at: <span id="date">Wednesday 21:47</span>
        </li>
        <li id="description">Partly cloudy</li>
      </ul>
    </div>
  );
}
