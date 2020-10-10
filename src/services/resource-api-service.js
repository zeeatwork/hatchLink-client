import TokenService from "../services/token-service";

import config from "../config";

// let resourceStore = {
//   name: "",
//   url: "",
//   cost: 0,
//   format: "",
//   subject: "",
// };
// let reviewStore = {
//   comment: "",
//   overall_rating: 0,
//   communication_rating: 0,
//   has_materials: "",
//   has_quizzes: "",
//   has_exercises: "",
// };

const ResourceApiService = {
  getResources() {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  updateResource(resource) {
    return fetch(`${config.API_ENDPOINT}/resources/${resource.id}`, {
      method: "PATCH",
      body: JSON.stringify(resource),
      headers: {
        "content-type": "application/json",
      },
    });
  },
  getReviewsForResources(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}/reviews`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(resourceId),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) => {
      if (res.statusCode !== 204) {
        console.log("Delete failed.");
      } else {
        res.redirect(`${config.API_ENDPOINT}/resources/`);
      }
    });
  },
  // updateReview(resourceId){
  //   return fetch(`https://localhost:8000/api/articles/${this.props.match.params.articleId}`, {
  //     method: 'PATCH',
  //     body: JSON.stringify(this.state.inputValues)
  //   })
  //     .then(/* some content omitted */)
  //    .then(responseData => {
  //      this.context.updateArticle(responseData)
  //    })
  //     .catch(error => {/* some content omitted */})
  // }
  // render() {
  //   const { title, style, content } = this.state
  //   return (
  //     <section className='EditArticleForm'>
  //       <h2>Edit article</h2>
  //       <form onSubmit={this.handleSubmit}></form>
  // )},
  postReview(review) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(review),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default ResourceApiService;
