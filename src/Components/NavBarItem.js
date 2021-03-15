import React from "react";
import { Link } from 'react-router-dom'

function NavBarItem(props) {
  return (
    <div>
      <li id={props.item}>
        <Link
          to={props.tolink}
        >
          {props.item}
        </Link>
      </li>
    </div>
  );
}

export default NavBarItem;
