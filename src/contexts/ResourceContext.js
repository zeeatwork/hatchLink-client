import React, { Component } from "react";

export const nullResource = {
  // name: {},
  subject: [],
};

const ResourceContext = React.createContext({
  resource: nullResource,
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setResource: () => {},
  clearResource: () => {},
  addResource: () => {},
  deleteResource: () => {},
  updateResource: () => {},
  setReview: () => {},
  addReview: () => {},
});

export default ResourceContext;

export class ResourceProvider extends Component {
  state = {
    resource: nullResource,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  //   updateResource = updateResource=> {
  //    const newResource = this.state.resources.map(resource =>
  //      (resource.id === updatedResource.id)
  //        ? updatedResource
  //        : art
  //    )
  //    this.setState({
  //      resources: newResources
  //    })
  //  };

  clearError = () => {
    this.setState({ error: null });
  };

  setResource = (resource) => {
    this.setState({ resource });
  };

  setReviews = (reviews) => {
    this.setState({ reviews });
  };

  clearResource = () => {
    this.setResource(nullResource);
    this.setReviews([]);
  };

  addReview = (review) => {
    this.setReviews([...this.state.reviews, review]);
  };

  render() {
    const value = {
      resource: this.state.resource,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setResource: this.setResource,
      setReviews: this.setReviews,
      clearResource: this.clearResource,
      addReview: this.addReview,
      addResource: this.addResource,
      updateResource: this.updateResource,
      deleteResource: this.deleteResource,
    };
    return (
      <ResourceContext.Provider value={value}>
        {this.props.children}
      </ResourceContext.Provider>
    );
  }
}
