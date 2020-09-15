import React, { Component } from "react";

const ResourceListContext = React.createContext({
  resourceList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setResourceList: () => {},
});
export default ResourceListContext;

export class ResourceListProvider extends Component {
  state = {
    resourceList: [],
    error: null,
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
    };
    return (
      <ResourceListContext.Provider value={value}>
        {this.props.children}
      </ResourceListContext.Provider>
    );
  }
}
