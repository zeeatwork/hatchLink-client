import React, { Component } from "react";
import ResourceApiService from "../services/resource-api-service";

const ResourceListContext = React.createContext({
  resourceList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setResourceList: () => {},
  getAllResources: () => {},
});
export default ResourceListContext;

export class ResourceListProvider extends Component {
  state = {
    resourceList: [],
    error: null,
  };

  getAllResources = () => {
    this.clearError();
    ResourceApiService.getResources()
      .then(this.setResourceList)
      .catch(this.setError);
  };

  setResourceList = (resourceList) => {
    this.setState({ resourceList });
  };

  addResource = (newResource) => {
    this.setState({ resourceList: [...this.state.resourceList, newResource] });
  };

  updateResource = (resource) => {
    this.setState({
      resourceList: this.state.resourceList.map((res) => {
        if (res.id === resource.id) {
          return resource;
        }
        return res;
      }),
    });
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      resourceList: this.state.resourceList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setResourceList: this.setResourceList,
      updateResource: this.updateResource,
      addResource: this.addResource,
      getAllResources: this.getAllResources,
    };
    return (
      <ResourceListContext.Provider value={value}>
        {this.props.children}
      </ResourceListContext.Provider>
    );
  }
}
