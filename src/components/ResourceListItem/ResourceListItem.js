import React, { Component } from "react";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { NiceDate, Hyph } from '../Utils/Utils'

//import ResourceApiService from "../../services/resource-api-service";
import "./ResourceListItem.css";

export default class ResourceListItem extends Component {
  // handleDelete = (ev) => {
  //   ev.preventDefault();
  //   ResourceApiService.deleteResource(this.props.resource.id);
  // };
  render() {
    const { resource } = this.props;

    return (
      <div>
        <Link to={`/resources/${resource.id}`} className="ResourceListItem">
          <header className="ResourceListItem__header">
            <h2 className="ResourceListItem__heading">{resource.name}</h2>
            <ResourceDate resource={resource} />
          </header>
          <footer className="ResourceListItem__footer">
            {/* <ResourceStyle resource={resource} />
          {resource.author.id && <> */}
            {/* <ResourceReviewAuthor resource={resource} /> */}

            <ResourceReviewCount resource={resource} />
          </footer>
        </Link>
      </div>
    );
  }
}

// function ResourceStyle({ resource }) {
//   return (
//     <span className="ResourceListItem__style">
//       <StyleIcon style={resource.style} /> {resource.style}
//     </span>
//   );
// }

function ResourceDate({ resource }) {
  return (
    <span className="ResourceListItem__date">{resource.date_created}</span>
  );
}

// function ResourceReviewAuthor({ review }) {
//   return <span className="Review__author">{review.author.user_name}</span>;
// }

function ResourceReviewCount({ resource, review }) {
  return (
    <span className="ResourceListItem__comment-count fa-layers fa-fw">
      {/* <FontAwesomeIcon size='lg' icon='comment' /> */}
      <span className="fa-layers-text fa-inverse">
        {resource.number_of_reviews}
      </span>
    </span>
  );
}
