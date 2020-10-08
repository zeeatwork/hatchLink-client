import React, { Component } from "react";

import ResourceApiService from "../../services/resource-api-service";
import "./reviewform.css";
import { Button, Textarea } from "../Utils/Utils";

export default class ReviewForm extends Component {
  state = {
    comment: null,
    overall_rating: null,
    communication_rating: null,
    has_materials: null,
    has_quizzes: null,
    has_exercises: null,
  };

  handleComment = (ev) => {
    this.setState({
      comment: ev.target.value,
    });
  };
  handleOverallRating = (ev) => {
    this.setState({
      overall_rating: ev.target.value,
    });
  };
  handleCommunicationRating = (ev) => {
    this.setState({
      communication_rating: ev.target.value,
    });
  };
  handleHasMaterials = (ev) => {
    this.setState({
      has_materials: ev.target.value,
    });
  };
  handleHasQuizzes = (ev) => {
    this.setState({
      has_quizzes: ev.target.value,
    });
  };
  handleHasExercises = (ev) => {
    this.setState({
      has_exercises: ev.target.value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    // const {
    //   comment,
    //   overall_rating,
    //   communication_rating,
    //   has_materials,
    //   has_quizzes,
    //   has_exercises,
    // } = ev.target;
    
    this.setState({ error: null });
    ResourceApiService.postReview({
      parent_id: this.props.match.params.resourceId,
      comment: this.state.comment,
      overall_rating: this.state.overall_rating,
      communication_rating: this.state.communication_rating,
      has_exercises: this.state.has_exercises,
      has_materials: this.state.has_materials,
      has_quizzes: this.state.has_quizzes,
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
            <input
              type="radio"
              id="true"
              name="has_exercises"
              value="true"
              onChange={this.handleHasExercises}
            />
            <label htmlFor="true">True</label>
          </p>

          <p>
            <input
              type="radio"
              id="false"
              name="has_exercises"
              value="false"
              onChange={this.handleHasExercises}
            />
            <label htmlFor="false">False</label>
          </p>

          <p>Quizzes Included?</p>
          <p>
            <input
              type="radio"
              id="true"
              name="has_quizzes"
              value="true"
              onChange={this.handleHasQuizzes}
            />
            <label htmlFor="true">True</label>
          </p>

          <p>
            <input
              type="radio"
              id="false"
              name="has_quizzes"
              value="false"
              onChange={this.handleHasQuizzes}
            />
            <label htmlFor="false">False</label>
          </p>

          <p>Materials Included?</p>
          <p>
            <input
              type="radio"
              id="true"
              name="has_materials"
              value="true"
              onChange={this.handleHasMaterials}
            />
            <label htmlFor="true">True</label>
          </p>
          <p>
            <input
              type="radio"
              id="false"
              name="has_materials"
              value="false"
              onChange={this.handleHasMaterials}
            />
            <label htmlFor="false">False</label>
          </p>

          <p>Overall Rating</p>
          <input
            type="range"
            min="1"
            max="10"
            value="5"
            className="slider"
            id="overall_rating"
            name="overall_rating"
            onChange={this.handleOverallRating}
          ></input>
          <p>Communication Rating</p>
          <input
            type="range"
            min="1"
            max="10"
            value="5"
            className="slider"
            id="communication_rating"
            name="communication_rating"
            onChange={this.handleCommunicationRating}
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
            onChange={this.handleComment}
          ></Textarea>
        </div>
        <Button type="submit">Post Review</Button>
      </form>
    );
  }
}
