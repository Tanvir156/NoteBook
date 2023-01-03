import React from "react";
import { Link } from "react-router-dom";

const SessionSelect = () => {
  return (
    <div style={{ position: "relative", top: "115px" }}>
      <ul>
        <li>
          <Link to="/showshedule2019">2019-20</Link>
        </li>
        <li>2020-21</li>
      </ul>
    </div>
  );
};

export default SessionSelect;
