import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { NiceDate, Hyph } from '../Utils/Utils'
import StyleIcon from "../StyleIcon/StyleIcon";
import ResourceContext from "../../contexts/ResourceContext";

import "./ResourceDetails.css";

export default class ResourceListItem extends Component {
  static contextType = ResourceContext;

  render() {
    const { resource } = this.props;

    return (
      <div>
        <Link to="/resources">&lt; Back to Resource List</Link>
        <h2>{resource.name}</h2>

        <button>Delete Resource</button>
        {/* <Link to="/edit-resource">Edit Resource</Link> */}
      </div>
    );
  }
}
