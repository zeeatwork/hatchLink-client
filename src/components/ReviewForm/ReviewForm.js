import React, { Component } from "react";
import ResourceContext from "../../contexts/ResourceContext";
import ResourceApiService from "../../services/resource-api-service";
import "./reviewform.css";
import { Button, Textarea } from "../Utils/Utils";

export default class ReviewForm extends Component {
  static contextType = ResourceContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { resource } = this.context;
    const {
      comment,
      overall_rating,
      communication_rating,
      has_materials,
      has_quizzes,
      has_exercises,
    } = ev.target;
    this.setState({ error: null });
    ResourceApiService.postReview({
      comment: comment.value,
      overall_rating: overall_rating.value,
      communication_rating: communication_rating.value,
      has_exercises: has_exercises.value,
      has_materials: has_materials.value,
      has_quizzes: has_quizzes.value,
    })
      .then(this.context.addReview)
      .then((review) => {
        comment.value = "";
        overall_rating.value = "";
        communication_rating.value = "";
        has_exercises.value = "";
        has_materials.value = "";
        has_quizzes.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="ReviewForm" onSubmit={this.handleSubmit}>
        <div className="survey">
          <p>Exercises Included?</p>
          <input type="radio" id="true" name="has_exercises" value="true" />
          <label htmlfor="true">True</label>
          <br />
          <input type="radio" id="false" name="has_exercises" value="false" />
          <label htmlfor="false">False</label>
          <br></br>
          <p>Quizzes Included?</p>
          <input type="radio" id="true" name="has_quizzes" value="true" />
          <label htmlfor="true">True</label>
          <br />
          <input type="radio" id="false" name="has_quizzes" value="false" />
          <label htmlfor="false">False</label>
          <br></br>
          <p>Materials Included?</p>
          <input type="radio" id="true" name="has_materials" value="true" />
          <label htmlfor="true">True</label>
          <br />
          <input type="radio" id="false" name="has_materials" value="false" />
          <label htmlfor="false">False</label>
          <br></br>
          <p>Overall Rating</p>
          <input
            type="range"
            min="1"
            max="10"
            value="5"
            class="slider"
            id="overall_rating"
          ></input>
          <p>Communication Rating</p>
          <input
            type="range"
            min="1"
            max="10"
            value="5"
            class="slider"
            id="communication_rating"
          ></input>
        </div>
        <div className="text">
          <Textarea
            required
            aria-label="Type a comment..."
            name="text"
            id="text"
            cols="30"
            rows="3"
            placeholder="Type a comment.."
          ></Textarea>
        </div>
        <Button type="submit">Post Review</Button>
      </form>
    );
  }
}
