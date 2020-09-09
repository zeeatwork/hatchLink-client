import React from "react";
import ResourceContext from "../../contexts/ResourceContext";
import ResourceApiService from "../../services/resource-api-service";
import "./addResouce.css";

export default class AddResource extends Component {
  static contextType = ResourceContext;
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, url, cost, format, subject } = ev.target;
    this.setState({ error: null });
    ResourceApiService.postResource({
      name: name.value,
      url: url.value,
      cost: cost.value,
      format: format.value,
      subject: subject.value,
    })
      .then((resource) => {
        name.value = "";
        url.value = "";
        cost.value = "";
        format.value = "";
        subject.value = "";
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <form className="ResourceForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <label htmlfor="Name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlfor="url">Website:</label>
        <br />
        <input type="url" id="url" name="url" />
        <input />
        <label htmlfor="price">Price:</label>
        <br />
        <input type="number" id="price" name="price" />
        <input />
        <label htmlfor="subject">Subject:</label>
        <select name="subject" id="subject">
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="General">General Dev</option>
        </select>
        <label htmlfor="format">Format:</label>
        <select name="format" id="format">
          <option value="Book">Book</option>
          <option value="Stream">Stream</option>
          <option value="Audio">Audio</option>
          <option value="Self-Guided">Self-Guided</option>
        </select>
        <input type="submit" value="Submit">
          Add
        </input>
      </form>
    );
  }
}
