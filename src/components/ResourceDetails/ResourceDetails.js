import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { NiceDate, Hyph } from '../Utils/Utils'
import StyleIcon from "../StyleIcon/StyleIcon";
import ResourceContext from "../../contexts/ResourceContext";
import ResourceApiService from "../../services/resource-api-service";
import "./ResourceDetails.css";

export default class ResourceListItem extends Component {
  static contextType = ResourceContext;

  handleDelete = (ev) => {
    ev.preventDefault();
    const { resource } = this.context;
    const { resourceId } = ev.target;
    ResourceApiService.deleteResource(resource.id);
    // .then(this.context.)
    // })
    // .catch(this.context.setError);
  };
  render() {
    const { resource } = this.props;
    return (
      <div>
        <Link
          to={`/resource/${resource.id}`}
          className="ResourceListItem"
        ></Link>
        <button>Delete Resource</button>
        {/* <Link to="/edit-resource">Edit Resource</Link> */}
      </div>
    );
  }
}
