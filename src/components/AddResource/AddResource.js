import React from "react";
import ResourceApiService from "../../services/resource-api-service";
import "./addResource.css";

export default class AddResource extends React.Component {
  // static defaultProps = {
  //   onRegistrationSuccess: () => {},
  // };

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
        this.props.history.push("/resources");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  render() {
    const { error } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>Add A Resource</h2>

          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="url">Website:</label>
          <br />
          <input type="url" id="url" name="url" />
          <br />
          <label htmlFor="cost">Price:</label>
          <br />
          <input type="number" id="cost" name="cost" />
          <br />
          <label htmlFor="subject">Subject:</label>
          <select name="subject" id="subject">
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="General">General Dev</option>
          </select>
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
      </div>
    );
  }
}
