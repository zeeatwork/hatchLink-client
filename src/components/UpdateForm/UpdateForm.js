import React from "react";

import ResourceApiService from "../../services/resource-api-service";

//import "./UpdateResource.css";

export default class UpdateResourceForm extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };
  //can I set the default values to their current value?
  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, url, cost, format } = ev.target;
    this.setState({ error: null });
    ResourceApiService.updateResource({
      resource_name: this.props.resource.name,
      url: url.value,
      cost: cost.value,
      format: format.value,
      id: this.props.resource.id,
    })
      .then((resource) => {
        name.value = "";
        url.value = "";
        cost.value = "";
        format.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      })
      .then((resource) => this.props.history.push("/resources"));
  };
  render() {
    const { error } = this.state;
    const { resource } = this.props;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>Choose the items to update for {resource.name}</h2>

        <label htmlFor="url">Website:</label>
        <br />
        <input type="url" id="url" name="url" defaultValue={resource.url} />
        <br />
        <label htmlFor="cost">Price:</label>
        <br />
        <input
          type="number"
          id="cost"
          name="cost"
          defaultValue={resource.cost}
        />
        <br />
        <label htmlFor="format">Format:</label>
        <select name="format" id="format">
          <option value="Book">Book</option>
          <option value="Stream">Stream</option>
          <option value="Audio">Audio</option>
          <option value="Self-Guided">Self-Guided</option>
          <option value="Class">Class</option>
        </select>
        <button type="submit">Submit</button>
        <div role="alert">
          {error && <p className="red">{error.message}</p>}
        </div>
      </form>
    );
  }
}
