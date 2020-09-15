import React, { Component } from "react";

import ResourceApiService from "../../services/resource-api-service";
import "./reviewform.css";
import { Button, Textarea } from "../Utils/Utils";

export default class ReviewForm extends Component {
  handleSubmit = (ev) => {
    ev.preventDefault();

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
      parent_id: this.props.match.params.resourceId,
      comment: comment.value,
      overall_rating: overall_rating.value,
      communication_rating: communication_rating.value,
      has_exercises: has_exercises.value,
      has_materials: has_materials.value,
      has_quizzes: has_quizzes.value,
    }).then((review) =>
      this.props.history.push(
        `/resources/${this.props.match.params.resourceId}`
      )
    );
  };

  render() {
    return (
      <form className="ReviewForm" onSubmit={this.handleSubmit}>
        <div className="survey">
          <p>Exercises Included?</p>
          <p>
            <input type="radio" id="true" name="has_exercises" value="true" />
            <label htmlfor="true">True</label>
          </p>

          <p>
            <input type="radio" id="false" name="has_exercises" value="false" />
            <label htmlfor="false">False</label>
          </p>

          <p>Quizzes Included?</p>
          <p>
            <input type="radio" id="true" name="has_quizzes" value="true" />
            <label htmlfor="true">True</label>
          </p>

          <p>
            <input type="radio" id="false" name="has_quizzes" value="false" />
            <label htmlfor="false">False</label>
          </p>

          <p>Materials Included?</p>
          <p>
            <input type="radio" id="true" name="has_materials" value="true" />
            <label htmlfor="true">True</label>
          </p>
          <p>
            <input type="radio" id="false" name="has_materials" value="false" />
            <label htmlfor="false">False</label>
          </p>

          <p>Overall Rating</p>
          <input
            type="range"
            min="1"
            max="10"
            value="5"
            class="slider"
            id="overall_rating"
            name="overall_rating"
          ></input>
          <p>Communication Rating</p>
          <input
            type="range"
            min="1"
            max="10"
            value="5"
            class="slider"
            id="communication_rating"
            name="communication_rating"
          ></input>
        </div>
        <div className="text">
          <Textarea
            required
            aria-label="Type a comment..."
            name="comment"
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
